import { memo, useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;

  uniform float iTime;
  uniform vec2 iResolution;
  varying vec2 vUv;

  vec3 palette(float t) {
    vec3 a = vec3(0.010, 0.028, 0.082);
    vec3 b = vec3(0.040, 0.070, 0.145);
    vec3 c = vec3(0.165, 0.230, 0.340);
    vec3 d = vec3(0.080, 0.120, 0.180);
    return a + b * cos(6.28318 * (c * t + d));
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= iResolution.x / max(iResolution.y, 1.0);

    float t = iTime * 0.135;
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

const FlowShaderMaterial = shaderMaterial(
  { iTime: 0, iResolution: new THREE.Vector2(1, 1) },
  vertexShader,
  fragmentShader,
);

extend({ FlowShaderMaterial });

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
  transform: "translateX(-50%)"
};
const CANVAS_STYLE = { width: "100vw", height: "100%" };
const CAMERA_CONFIG = {
  position: [0, 0, 1],
  fov: 68,
  near: 0.1,
  far: 10
};
const PLANE_SIZE = [5.2, 3.0];
const DEFAULT_DPR = [1, 1.25];
const RESIZE_CONFIG = { scroll: false, debounce: { scroll: 0, resize: 120 } };

function getAdaptiveDpr() {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return DEFAULT_DPR;
  }

  const isMobile =
    window.matchMedia("(pointer: coarse)").matches ||
    /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  const deviceMemory =
    typeof navigator.deviceMemory === "number" ? navigator.deviceMemory : 8;
  const hardwareConcurrency =
    typeof navigator.hardwareConcurrency === "number"
      ? navigator.hardwareConcurrency
      : 8;
  const lowEnd = deviceMemory <= 4 || hardwareConcurrency <= 4;

  if (lowEnd) return [0.85, 1.0];
  if (isMobile) return [1.0, 1.25];
  return [1.0, 1.5];
}

const ShaderPlane = memo(function ShaderPlane() {
  const materialRef = useRef(null);
  const size = useThree((state) => state.size);

  useEffect(() => {
    const material = materialRef.current;
    if (!material) return;
    material.iResolution.set(size.width, size.height);
  }, [size.width, size.height]);

  useFrame(({ clock }) => {
    const material = materialRef.current;
    if (!material) return;
    material.iTime = clock.elapsedTime;
  });

  return (
    <mesh frustumCulled={false} position={[0, 0, -0.5]}>
      <planeGeometry args={PLANE_SIZE} />
      <flowShaderMaterial ref={materialRef} toneMapped={false} />
    </mesh>
  );
});

const ShaderBackground = memo(function ShaderBackground() {
  const [dpr, setDpr] = useState(DEFAULT_DPR);

  useEffect(() => {
    setDpr(getAdaptiveDpr());
  }, []);

  return (
    <div style={WRAPPER_STYLE}>
      <Canvas
        frameloop="always"
        camera={CAMERA_CONFIG}
        dpr={dpr}
        resize={RESIZE_CONFIG}
        performance={{ min: 0.75, max: 1, debounce: 200 }}
        style={CANVAS_STYLE}
        gl={{
          antialias: false,
          alpha: false,
          depth: false,
          stencil: false,
          preserveDrawingBuffer: false,
          powerPreference: "high-performance"
        }}
      >
        <ShaderPlane />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030b1f]/30 via-[#07183d]/10 to-[#040d24]/24" />
    </div>
  );
});

export default ShaderBackground;
