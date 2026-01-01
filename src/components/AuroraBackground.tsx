import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

interface AuroraBackgroundProps {
  isStatic?: boolean;
}

const AuroraBackground = ({ isStatic = false }: AuroraBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: !isStatic,
          touchControls: !isStatic,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xd4a574, // Gold/orange accent color
          backgroundColor: 0x0a0a0f, // Dark background
          points: isStatic ? 6.00 : 8.00, // Reduced points for less density
          maxDistance: 30.00, // Increased max distance for more spread
          spacing: 25.00, // Increased spacing for more spread
          showDots: true,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isStatic]);

  // For static mode, pause animation after initial render
  useEffect(() => {
    if (isStatic && vantaEffect) {
      // Pause the animation loop
      const pauseAnimation = () => {
        if (vantaEffect.renderer) {
          vantaEffect.renderer.setAnimationLoop(null);
        }
      };
      // Small delay to let initial frame render
      setTimeout(pauseAnimation, 100);
    }
  }, [isStatic, vantaEffect]);

  return (
    <>
      {/* Background Layer: Faint, slow, slightly blurred (static CSS glow) */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.05)_0%,transparent_70%)] blur-2xl animate-pulse-slow" />
      </div>

      {/* Mid-Layer: Vanta.js particles */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />

      {/* Foreground Layer: Few, brighter, very slow movement (subtle animated radial gradient) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 animate-foreground-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.01)_0%,transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.01)_0%,transparent_30%)]" />
      </div>

      {/* Subtle vignette overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(222,47%,5%)/0.5_70%)]" />
    </>
  );
};

export default AuroraBackground;