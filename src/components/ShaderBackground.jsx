import { memo, useEffect, useRef } from "react";

// Fundo animado em WebGL puro. Era três dependências (three, @react-three/fiber,
// @react-three/drei) para desenhar um quad em tela cheia, e o shader é o mesmo.
const vertexShader = `
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

// O enquadramento original vinha de um plano 5.2 x 3.0 visto por uma câmera
// com fov 68 a 1.5 de distância. Os fatores abaixo reproduzem esse recorte.
const fragmentShader = `
  precision mediump float;

  uniform float iTime;
  uniform vec2 iResolution;
  varying vec2 vUv;

  const float PLANE_W = 5.2;
  const float PLANE_H = 3.0;
  const float VISIBLE_H = 2.0235;

  vec3 palette(float t) {
    vec3 a = vec3(0.010, 0.028, 0.082);
    vec3 b = vec3(0.040, 0.070, 0.145);
    vec3 c = vec3(0.165, 0.230, 0.340);
    vec3 d = vec3(0.080, 0.120, 0.180);
    return a + b * cos(6.28318 * (c * t + d));
  }

  void main() {
    float aspect = iResolution.x / max(iResolution.y, 1.0);
    vec2 crop = vec2(VISIBLE_H * aspect / PLANE_W, VISIBLE_H / PLANE_H);
    vec2 framed = vec2(0.5) + (vUv - vec2(0.5)) * crop;

    vec2 uv = framed * 2.0 - 1.0;
    uv.x *= aspect;

    float t = iTime * 0.085;
    vec2 q = uv;

    q += 0.14 * vec2(
      sin(uv.y * 1.8 + t * 1.08),
      sin(uv.x * 1.6 - t * 0.88)
    );

    float fieldA = sin((q.x * 1.7 + q.y * 1.3) + t * 1.04);
    float fieldB = sin((q.x - q.y) * 2.05 - t * 1.26);
    float fieldC = sin(length(q) * 5.2 - t * 1.62);

    float flow = fieldA * 0.47 + fieldB * 0.34 + fieldC * 0.19;
    float tone = 0.5 + 0.5 * sin(flow * 2.05 + t * 0.54);
    float spread = smoothstep(4.4, 0.0, dot(uv, uv));
    float haze = smoothstep(3.0, 0.0, dot(uv * vec2(0.75, 1.05), uv * vec2(0.75, 1.05)));

    vec3 color = palette(tone + flow * 0.08);
    color = mix(vec3(0.008, 0.022, 0.070), color, 0.90);
    color += vec3(0.010, 0.045, 0.145) * (0.42 + 0.58 * spread);
    color += vec3(0.006, 0.032, 0.108) * (0.24 + 0.76 * haze);

    gl_FragColor = vec4(color * (0.76 + 0.24 * spread), 1.0);
  }
`;

const WRAPPER_STYLE = {
  position: "fixed",
  inset: 0,
  left: "50%",
  width: "100vw",
  minWidth: "100vw",
  height: "100svh",
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: -10,
  transform: "translateX(-50%)",
  // Se o WebGL não subir, o gradiente sozinho já sustenta a página.
  background:
    "radial-gradient(120% 90% at 50% 12%, #0b1c3f 0%, #061128 46%, #03081a 100%)"
};

const CANVAS_STYLE = { display: "block", width: "100%", height: "100%" };

function maxDevicePixelRatio() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return 1;

  const deviceMemory =
    typeof navigator.deviceMemory === "number" ? navigator.deviceMemory : 8;
  const threads =
    typeof navigator.hardwareConcurrency === "number"
      ? navigator.hardwareConcurrency
      : 8;

  if (deviceMemory <= 4 || threads <= 4) return 1;
  if (window.matchMedia("(pointer: coarse)").matches) return 1.25;
  return 1.5;
}

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

const ShaderBackground = memo(function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const gl =
      canvas.getContext("webgl", {
        antialias: false,
        alpha: false,
        depth: false,
        stencil: false,
        preserveDrawingBuffer: false,
        powerPreference: "high-performance"
      }) || canvas.getContext("experimental-webgl");

    if (!gl) return undefined;

    const vertex = compile(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return undefined;

    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return undefined;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "iTime");
    const uResolution = gl.getUniformLocation(program, "iResolution");

    const dprCap = maxDevicePixelRatio();
    let frame = 0;
    let start = 0;

    const draw = (elapsed) => {
      gl.uniform1f(uTime, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, dprCap);
      const width = Math.max(1, Math.round(canvas.clientWidth * ratio));
      const height = Math.max(1, Math.round(canvas.clientHeight * ratio));

      if (canvas.width === width && canvas.height === height) return;

      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uResolution, width, height);
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const renderLoop = (timestamp) => {
      if (!start) start = timestamp;
      resize();
      draw((timestamp - start) / 1000);
      frame = window.requestAnimationFrame(renderLoop);
    };

    const stop = () => {
      if (!frame) return;
      window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const play = () => {
      if (frame || reducedMotion.matches || document.hidden) return;
      start = 0;
      frame = window.requestAnimationFrame(renderLoop);
    };

    const renderStaticFrame = () => {
      resize();
      draw(12);
    };

    const syncMotion = () => {
      if (reducedMotion.matches) {
        stop();
        renderStaticFrame();
        return;
      }
      play();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
        return;
      }
      syncMotion();
    };

    const handleResize = () => {
      if (frame) return;
      renderStaticFrame();
    };

    syncMotion();

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("resize", handleResize);
    reducedMotion.addEventListener("change", syncMotion);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      reducedMotion.removeEventListener("change", syncMotion);

      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      // Sem loseContext(): o StrictMode do React roda o efeito duas vezes em
      // dev, e getContext() devolveria o mesmo contexto já perdido na segunda.
    };
  }, []);

  return (
    <div style={WRAPPER_STYLE}>
      <canvas ref={canvasRef} style={CANVAS_STYLE} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030b1f]/30 via-[#07183d]/10 to-[#040d24]/24" />
    </div>
  );
});

export default ShaderBackground;
