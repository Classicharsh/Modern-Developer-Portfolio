import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- THREE.JS PARTICLE FIELD SETUP ---
    if (!canvasRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create 3D particles
    const particleCount = 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPrimary = new THREE.Color('#10B981');
    const colorSecondary = new THREE.Color('#3B82F6');

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates inside a sphere
      const r = 500;
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 100;

      // Color interpolation
      const mixRatio = Math.random();
      const mixedColor = new THREE.Color().lerpColors(colorPrimary, colorSecondary, mixRatio * 0.4);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circle texture for soft glow points
    const createCircleTexture = () => {
      const matCanvas = document.createElement('canvas');
      matCanvas.width = 16;
      matCanvas.height = 16;
      const matContext = matCanvas.getContext('2d');
      const gradient = matContext.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.5)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      matContext.fillStyle = gradient;
      matContext.fillRect(0, 0, 16, 16);

      const texture = new THREE.Texture(matCanvas);
      texture.needsUpdate = true;
      return texture;
    };

    const material = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      map: createCircleTexture(),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse movement influence for parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleThreeMouseMove = (event) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleThreeMouseMove);

    // Window Resize listener
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slow passive rotation
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;

      // Mouse parallax easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 50;
      camera.position.y = mouse.y * 50;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleThreeMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      if (material.map) material.map.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 bg-[#070708] overflow-hidden select-none pointer-events-none"
    >
      {/* ThreeJS Particle Field Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" style={{ background: 'transparent' }} />

      {/* Dynamic Glowing Ambient Aura Blobs (Large Background Glow) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full animate-blob-1 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0) 70%)',
          filter: 'blur(120px)',
        }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full animate-blob-2 opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0) 70%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Subtle Floating Light Balls (Lite Light Orbs) */}
      <div 
        className="absolute top-[20%] left-[15%] w-48 h-48 rounded-full animate-drift-1 opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0) 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute top-[60%] right-[20%] w-56 h-56 rounded-full animate-drift-2 opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div 
        className="absolute bottom-[15%] left-[25%] w-40 h-40 rounded-full animate-drift-3 opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(6, 182, 212, 0) 70%)',
          filter: 'blur(35px)',
        }}
      />
      <div 
        className="absolute top-[10%] right-[10%] w-36 h-36 rounded-full animate-drift-2 opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0) 70%)',
          filter: 'blur(30px)',
        }}
      />
      <div 
        className="absolute top-[45%] left-[40%] w-52 h-52 rounded-full animate-drift-1 opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0) 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Unique Animated Shooting Star Meteor Beams */}
      <div className="meteor-beam meteor-1" />
      <div className="meteor-beam meteor-2" />
      <div className="meteor-beam meteor-3" />
      <div className="meteor-beam meteor-4" />
      <div className="meteor-beam meteor-5" />

      {/* Dotted Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
        }}
      />

      {/* Interactive Cursor Spotlight */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.15), transparent 80%)',
        }}
      />
    </div>
  );
};

export default Background3D;
