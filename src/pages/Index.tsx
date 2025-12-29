import AuroraBackground from '@/components/AuroraBackground';
import GlassButton from '@/components/GlassButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AuroraBackground />
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 animate-fade-in-up gradient-text text-glow">
          Hello. We build ideas into reality.
        </h1>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 animate-fade-in-up-delayed-2">
          <GlassButton to="/buy" subtitle="Instant access to ready projects">
            BUY
          </GlassButton>
          <GlassButton to="/build" subtitle="Custom-built from your idea">
            BUILD
          </GlassButton>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
