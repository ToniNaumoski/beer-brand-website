'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const SECTION_INDEXES = [1, 2, 3, 4, 5, 6];
const DESKTOP_TIMELINE = [
  [{ x: 0, xu: 'em', y: 0, yu: 'em', z: 0, frame: 0, scale: 1 }, { x: 14, xu: 'em', y: 10, yu: 'em', z: -24, frame: 99, scale: 1.4 }],
  [{ x: 14, xu: 'em', y: 10, yu: 'em', z: -10, frame: 99, scale: 1.4 }, { x: -19, xu: 'em', y: 0, yu: 'em', z: 0, frame: 0, scale: 1.1 }],
  [{ x: -19, xu: 'em', y: 0, yu: 'vh', z: -40, frame: 0, scale: 1.1 }, { x: 23, xu: 'em', y: 25, yu: 'vh', z: 0, frame: 99, scale: 0.4 }],
  [{ x: 23, xu: 'em', y: 25, yu: 'vh', z: 0, frame: 99, scale: 0.4 }, { x: -25, xu: 'em', y: 4, yu: 'vh', z: -27, frame: 0, scale: 1.4 }],
  [{ x: -25, xu: 'em', y: 4, yu: 'vh', z: -27, frame: 0, scale: 1.4 }, { x: 25, xu: 'em', y: 0, yu: 'vh', z: 18, frame: 99, scale: 1.3 }],
  [{ x: 25, xu: 'em', y: 0, yu: 'vh', z: 18, frame: 99, scale: 1.3 }, { x: 0, xu: 'em', y: 0, yu: 'vh', z: 0, frame: 0, scale: 1 }],
];
const TABLET_TIMELINE = [
  [{ x: 0, xu: 'em', y: 0, yu: 'em', z: 0, frame: 0, scale: 1 }, { x: 45, xu: 'em', y: 22, yu: 'em', z: -24, frame: 99, scale: 2 }],
  [{ x: 45, xu: 'em', y: 22, yu: 'em', z: -24, frame: 99, scale: 2 }, { x: -21, xu: 'em', y: 25, yu: 'em', z: -40, frame: 0, scale: 1.2 }],
  [{ x: -21, xu: 'em', y: 25, yu: 'em', z: -40, frame: 0, scale: 1.2 }, { x: 0, xu: 'em', y: 40, yu: 'em', z: 0, frame: 99, scale: 0.5 }],
  [{ x: 0, xu: 'em', y: 40, yu: 'em', z: 0, frame: 99, scale: 0.5 }, { x: 0, xu: 'em', y: 20, yu: 'em', z: -24, frame: 0, scale: 1.4 }],
  [{ x: 0, xu: 'em', y: 20, yu: 'em', z: -24, frame: 0, scale: 1.4 }, { x: 10, xu: 'em', y: 30, yu: 'em', z: 15, frame: 99, scale: 1 }],
  [{ x: 10, xu: 'em', y: 30, yu: 'em', z: 15, frame: 99, scale: 1 }, { x: 0, xu: 'em', y: 0, yu: 'em', z: 0, frame: 0, scale: 1 }],
];
const MOBILE_TIMELINE = [
  [{ x: 0, xu: 'em', y: 0, yu: 'em', z: 0, frame: 0, scale: 1 }, { x: 35, xu: 'em', y: 30, yu: 'em', z: -22, frame: 99, scale: 2 }],
  [{ x: 35, xu: 'em', y: 30, yu: 'em', z: -22, frame: 99, scale: 2 }, { x: -3, xu: 'em', y: 39, yu: 'em', z: -25, frame: 0, scale: 1.4 }],
  [{ x: -3, xu: 'em', y: 39, yu: 'em', z: -25, frame: 0, scale: 1.4 }, { x: 0, xu: 'em', y: 50, yu: 'em', z: 0, frame: 99, scale: 0.6 }],
  [{ x: 0, xu: 'em', y: 60, yu: 'em', z: 0, frame: 99, scale: 0.6 }, { x: 0, xu: 'em', y: 30, yu: 'em', z: -35, frame: 0, scale: 1.5 }],
  [{ x: 0, xu: 'em', y: 30, yu: 'em', z: -35, frame: 0, scale: 1.5 }, { x: 0, xu: 'em', y: 45, yu: 'em', z: 15, frame: 99, scale: 1.3 }],
  [{ x: 0, xu: 'em', y: 45, yu: 'em', z: 15, frame: 99, scale: 1.3 }, { x: 0, xu: 'em', y: 0, yu: 'em', z: 0, frame: 0, scale: 1 }],
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const lerp = (from, to, progress) => from + (to - from) * progress;
const mixFrame = (from, to, progress) => ({
  x: lerp(from.x, to.x, progress),
  xu: to.xu,
  y: lerp(from.y, to.y, progress),
  yu: to.yu,
  z: lerp(from.z, to.z, progress),
  frame: lerp(from.frame, to.frame, progress),
  scale: lerp(from.scale, to.scale, progress),
});

const getTimeline = () => {
  if (window.innerWidth >= 992) return DESKTOP_TIMELINE;
  if (window.innerWidth >= 768) return TABLET_TIMELINE;
  return MOBILE_TIMELINE;
};

const parseMatrix = (transform) => {
  const match = transform?.match(/^matrix\(([^)]+)\)$/);
  if (!match) return null;
  const [a, b] = match[1].split(',').map((value) => Number.parseFloat(value));
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  return {
    rotation: Math.atan2(b, a) * (180 / Math.PI),
    scale: Math.hypot(a, b),
  };
};

const rotationDistance = (a, b) => {
  const delta = Math.abs(a - b) % 360;
  return delta > 180 ? 360 - delta : delta;
};

const inferFrameFromTransform = (transform) => {
  const parsed = parseMatrix(transform);
  if (!parsed) return 0;

  let best = { error: Infinity, frame: 0 };
  for (const [from, to] of getTimeline()) {
    for (let step = 0; step <= 100; step += 1) {
      const progress = step / 100;
      const scale = lerp(from.scale, to.scale, progress);
      const rotation = lerp(from.z, to.z, progress);
      const scaleError = Math.abs(parsed.scale - scale) * 45;
      const rotationError = rotationDistance(parsed.rotation, rotation);
      const error = scaleError + rotationError;

      if (error < best.error) {
        best = {
          error,
          frame: lerp(from.frame, to.frame, progress),
        };
      }
    }
  }

  return best.frame;
};

export default function RotatingBottle({ lottieSrc, src }) {
  const mountRef = useRef(null);
  const proxyLottieRef = useRef(null);
  const proxyWrapperRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const proxyLottie = proxyLottieRef.current;
    const proxyWrapper = proxyWrapperRef.current;
    const wrapper = wrapperRef.current;
    if (!mount || !proxyLottie || !proxyWrapper || !wrapper) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 0.04, 9.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(2.5, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf4c68e, 1.4);
    fillLight.position.set(-3, 1.5, 3);
    scene.add(fillLight);
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));

    const bottleRoot = new THREE.Group();
    scene.add(bottleRoot);

    let mixer;
    let frameId;
    let lastTime = performance.now();
    let disposed = false;
    let scrollState = { x: 0, xu: 'em', y: 0, yu: 'em', z: 0, frame: 0, scale: 1 };
    let modelBaseRotation = { x: 0, y: 0, z: 0 };

    const fitRenderer = () => {
      const { width, height } = mount.getBoundingClientRect();
      const safeWidth = Math.max(1, width);
      const safeHeight = Math.max(1, height);
      renderer.setSize(safeWidth, safeHeight, false);
      camera.aspect = safeWidth / safeHeight;
      camera.updateProjectionMatrix();
    };

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/assets/draco/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      src,
      (gltf) => {
        if (disposed) return;

        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDimension = Math.max(size.x, size.y, size.z) || 1;

        model.position.sub(center);
        model.scale.setScalar(3 / maxDimension);
        model.rotation.set(0.04, Math.PI / 2, 0);
        modelBaseRotation = {
          x: model.rotation.x,
          y: model.rotation.y,
          z: model.rotation.z,
        };
        bottleRoot.add(model);

        if (gltf.animations.length) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }

        mount.classList.add('is-loaded');
        gsap.to(wrapper, { opacity: 1, duration: 0.35, ease: 'power2.out' });
      },
      undefined,
      (error) => {
        console.error('Bottle GLB failed to load', error);
        mount.classList.add('has-error');
      }
    );

    const readScrollState = () => {
      const sections = document.querySelectorAll('.s-scroll');
      const timeline = getTimeline();
      const viewportHeight = window.innerHeight || 1;

      for (let i = SECTION_INDEXES.length - 1; i >= 0; i -= 1) {
        const section = sections[SECTION_INDEXES[i]];
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
          const progress = clamp((viewportHeight - rect.top) / viewportHeight / 2, 0, 1);
          return mixFrame(timeline[i][0], timeline[i][1], progress);
        }
      }

      const lastSection = sections[SECTION_INDEXES[SECTION_INDEXES.length - 1]];
      if (lastSection && lastSection.getBoundingClientRect().top < 0) {
        return timeline[timeline.length - 1][1];
      }

      return timeline[0][0];
    };

    const applyScrollState = (nextState) => {
      scrollState = nextState;
    };

    const updateScrollState = () => applyScrollState(readScrollState());

    updateScrollState();
    window.addEventListener('resize', updateScrollState);

    const animate = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      updateScrollState();
      const proxyTransform = getComputedStyle(proxyLottie).transform;
      const proxyOpacity = getComputedStyle(proxyWrapper).opacity;
      wrapper.style.transform = proxyTransform === 'none' ? '' : proxyTransform;
      wrapper.style.opacity = proxyOpacity === '0' ? wrapper.style.opacity : proxyOpacity;
      scrollState.frame = inferFrameFromTransform(proxyTransform);

      if (bottleRoot.children[0]) {
        const model = bottleRoot.children[0];
        model.rotation.x = modelBaseRotation.x;
        model.rotation.y = modelBaseRotation.y + (scrollState.frame / 99) * Math.PI * 2;
        model.rotation.z = modelBaseRotation.z;
      }
      mixer?.update(delta);

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    fitRenderer();
    frameId = window.requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(fitRenderer);
    resizeObserver.observe(mount);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', updateScrollState);
      resizeObserver.disconnect();
      gsap.killTweensOf(wrapper);
      dracoLoader.dispose();
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.domElement.remove();
    };
  }, [src]);

  return (
    <div className="bottle" aria-hidden="true">
      <div
        className="bottle-wrapper bottle-wrapper--proxy"
        data-w-id="edfd468a-b958-925d-61b5-11d0c19fccfd"
        ref={proxyWrapperRef}
        style={{ opacity: 0 }}
      >
        <div
          className="bottle-lottie"
          data-animation-type="lottie"
          data-autoplay="0"
          data-default-duration="1.5416666666666667"
          data-direction="1"
          data-duration="1.5416666666666667"
          data-is-ix2-target="1"
          data-loop="0"
          data-renderer="svg"
          data-src={lottieSrc}
          data-w-id="cf753e38-c0d7-7257-8024-07bf7e77f4b0"
          ref={proxyLottieRef}
        />
      </div>
      <div className="bottle-wrapper bottle-wrapper--three" ref={wrapperRef}>
        <div className="bottle-three" ref={mountRef} />
      </div>
    </div>
  );
}
