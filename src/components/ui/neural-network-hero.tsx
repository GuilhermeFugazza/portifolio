'use client';

import { memo, useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

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
    vec3 a = vec3(0.04, 0.06, 0.13);
    vec3 b = vec3(0.20, 0.16, 0.25);
    vec3 c = vec3(0.45, 0.38, 0.50);
    vec3 d = vec3(0.02, 0.12, 0.22);
    return a + b * cos(6.28318 * (c * t + d));
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= iResolution.x / max(iResolution.y, 1.0);

    float t = iTime * 0.16;
    vec2 q = uv;

    q += 0.08 * vec2(
      sin(uv.y * 2.4 + t * 1.1),
      sin(uv.x * 2.1 - t * 0.9)
    );

    float fieldA = sin((q.x + q.y) * 2.8 + t);
    float fieldB = sin((q.x - q.y) * 3.6 - t * 1.3);
    float fieldC = sin(dot(q, q) * 10.0 - t * 1.9);

    float flow = fieldA * 0.50 + fieldB * 0.35 + fieldC * 0.15;
    float tone = 0.5 + 0.5 * sin(flow * 2.6 + t * 0.8);
    float vignette = smoothstep(1.35, 0.12, dot(uv, uv));

    vec3 color = palette(tone + flow * 0.08);
    color += vec3(0.05, 0.07, 0.11) * (1.0 - smoothstep(0.0, 1.2, dot(uv, uv)));
    color *= vignette;

    vec3 base = vec3(0.01, 0.015, 0.03);
    gl_FragColor = vec4(mix(base, color, 0.95), 1.0);
  }
`;

const FlowShaderMaterial = shaderMaterial(
  { iTime: 0, iResolution: new THREE.Vector2(1, 1) },
  vertexShader,
  fragmentShader,
);

extend({ FlowShaderMaterial });

const CANVAS_STYLE = { width: '100%', height: '100%' } as const;
const CAMERA_CONFIG = {
  position: [0, 0, 1] as [number, number, number],
  fov: 75,
  near: 0.1,
  far: 10,
} as const;
const RESIZE_CONFIG = { scroll: false, debounce: { scroll: 0, resize: 120 } } as const;
const PLANE_SIZE = [2.4, 2.4] as const;
const DEFAULT_DPR = [1, 1.25] as [number, number];
const DEFAULT_CTA_BUTTONS = [
  { text: 'Começar agora', href: '#comecar', primary: true },
  { text: 'Ver portfólio', href: '#projetos' },
] as const;
const DEFAULT_MICRO_DETAILS = ['Tipografia leve', 'Espaçamento preciso', 'Movimento sutil'] as const;

function detectAdaptiveDpr(): [number, number] {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return DEFAULT_DPR;
  }

  const isMobile =
    window.matchMedia('(pointer: coarse)').matches ||
    /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  const deviceMemory =
    typeof navigator.deviceMemory === 'number' ? navigator.deviceMemory : 8;
  const hardwareConcurrency =
    typeof navigator.hardwareConcurrency === 'number'
      ? navigator.hardwareConcurrency
      : 8;
  const lowEnd = deviceMemory <= 4 || hardwareConcurrency <= 4;

  if (lowEnd) return [0.8, 1.0];
  if (isMobile) return [1.0, 1.25];
  return [1.0, 1.5];
}

const ShaderPlane = memo(function ShaderPlane() {
  const materialRef = useRef<any>(null);
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
  const [dpr, setDpr] = useState<[number, number]>(DEFAULT_DPR);

  useEffect(() => {
    setDpr(detectAdaptiveDpr());
  }, []);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black" aria-hidden>
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
          powerPreference: 'high-performance',
        }}
      >
        <ShaderPlane />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />
    </div>
  );
});

interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

const Hero = memo(function Hero({
  title,
  description,
  badgeText = 'Superfícies generativas',
  badgeLabel = 'Novo',
  ctaButtons,
  microDetails,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);
  const ctaList = ctaButtons ?? DEFAULT_CTA_BUTTONS;
  const microList = microDetails ?? DEFAULT_MICRO_DETAILS;

  useGSAP(
    () => {
      const microItems = microRef.current
        ? (Array.from(microRef.current.children) as HTMLElement[])
        : [];
      const animatedNodes = [
        badgeRef.current,
        headerRef.current,
        paraRef.current,
        ctaRef.current,
      ].filter(Boolean) as HTMLElement[];

      gsap.set(animatedNodes, { autoAlpha: 0, y: 14, force3D: true });
      if (microItems.length > 0) {
        gsap.set(microItems, { autoAlpha: 0, y: 10, force3D: true });
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.42 }, 0.0)
        .to(headerRef.current, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.08)
        .to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.24)
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.45 }, 0.32);

      if (microItems.length > 0) {
        tl.to(
          microItems,
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.08 },
          0.38,
        );
      }
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] w-full overflow-hidden">
      <ShaderBackground />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-20 pt-32 sm:gap-8 sm:pt-40 md:px-10 lg:px-16">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
        >
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
            {badgeLabel}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-xs font-light tracking-tight text-white/80">
            {badgeText}
          </span>
        </div>

        <h1
          ref={headerRef}
          className="max-w-2xl text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </h1>

        <p
          ref={paraRef}
          className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg"
        >
          {description}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
          {ctaList.map((button) => (
            <a
              key={`${button.text}-${button.href}`}
              href={button.href}
              className={`rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 ${
                button.primary
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'text-white/80 hover:bg-white/5'
              }`}
            >
              {button.text}
            </a>
          ))}
        </div>

        <ul
          ref={microRef}
          className="mt-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60"
        >
          {microList.map((detail, index) => (
            <li key={`${detail}-${index}`} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/40" />
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
});

export default Hero;

declare module '@react-three/fiber' {
  interface ThreeElements {
    flowShaderMaterial: any;
  }
}
