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
          color: 0xd4a574,
          backgroundColor: 0x0a0a0f,
          points: isStatic ? 8.00 : 12.00,
          maxDistance: 22.00,
          spacing: 18.00,
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
      <div ref={vantaRef} className="fixed inset-0 -z-10" />
      {/* Subtle vignette overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(222,47%,5%)/0.5_70%)]" />
    </>
  );
};

export default AuroraBackground;
