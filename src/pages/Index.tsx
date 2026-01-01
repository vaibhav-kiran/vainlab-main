import AuroraBackground from '@/components/AuroraBackground';
import GlassButton from '@/components/GlassButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhyVainLabs from '@/components/landing/WhyVainLabs';
import WhatWeDo from '@/components/landing/WhatWeDo';
import WhoWeBuildFor from '@/components/landing/WhoWeBuildFor';
import HowItWorks from '@/components/landing/HowItWorks';
import WhyChooseUs from '@/components/landing/WhyChooseUs';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <AuroraBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 animate-fade-in-up gradient-text text-glow">
            Hello. We build ideas into reality.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 animate-fade-in-up-delayed">
            Tech • Biomedical • AI • IoT
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 animate-fade-in-up-delayed-2">
            <GlassButton to="/buy" subtitle="Instant access to ready projects">
              BUY
            </GlassButton>
            <GlassButton to="/build" subtitle="Custom-built from your idea">
              BUILD
            </GlassButton>
          </div>
        </div>
        
        <div id="why-us">
          <WhyVainLabs />
        </div>
        <div id="what-we-do">
          <WhatWeDo />
        </div>
        <div id="who-we-build-for">
          <WhoWeBuildFor />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;