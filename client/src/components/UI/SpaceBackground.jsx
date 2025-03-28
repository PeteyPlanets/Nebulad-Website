import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";

const SpaceBackground = () => {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const particleCount = 500;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "https://threejs.org/examples/textures/sprites/disc.png"
    );

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      map: texture,
      transparent: true,
    });

    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.x += 0.0001;
      particleSystem.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Dispose of resources
      particles.dispose();
      material.dispose();
      texture.dispose();

      // Dispose of renderer and remove it from the container
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", top: "-10vh", pointerEvents: "none" }}
    />
  );
};

export default SpaceBackground;
