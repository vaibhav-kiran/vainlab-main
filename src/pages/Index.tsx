import AuroraBackground from '@/components/AuroraBackground';
import GlassButton from '@/components/GlassButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhyVainLabs from '@/components/landing/WhyVainLabs';
import WhatWeDo from '@/components/landing/WhatWeDo';
import WhoWeBuildFor from '@/components/landing/WhoWeBuildFor';
import HowItWorks from '@/components/landing/HowItWorks';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import CallToAction from '@/components/landing/CallToAction';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <AuroraBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          
          {/* Headline */}
          <div className="relative mb-6">
            <div className="radial-glow-behind" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="block gradient-text text-glow-premium animate-hero-fade-in-up-1">Hello.</span>
              <span className="block gradient-text text-glow-premium animate-hero-fade-in-up-2">We build ideas into reality.</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-foreground/60 mb-12 tracking-[0.2em]">
            <span className="animate-subtext-fade-in-1">TECH</span>
            <span className="mx-2 animate-subtext-fade-in-2">•</span>
            <span className="animate-subtext-fade-in-2">BIOMEDICAL</span>
            <span className="mx-2 animate-subtext-fade-in-3">•</span>
            <span className="animate-subtext-fade-in-3">AI</span>
            <span className="mx-2 animate-subtext-fade-in-4">•</span>
            <span className="animate-subtext-fade-in-4">IOT</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 animate-cta-fade-in">
            <GlassButton to="/build" subtitle="Custom-built from your idea" variant="primary">
              BUILD
            </GlassButton>
            <GlassButton to="/buy" subtitle="Instant access to ready projects" variant="secondary">
              BUY
            </GlassButton>
          </div>
          
          {/* Trust Detail */}
          <p className="mt-10 text-sm text-foreground/40 animate-trust-fade-in">
            Engineering real-world solutions. Not templates.
          </p>
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
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;