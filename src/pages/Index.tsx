import React from 'react';
import GlassButton from '@/components/GlassButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhyVainLabs from '@/components/landing/WhyVainLabs';
import WhatWeDo from '@/components/landing/WhatWeDo';
import WhoWeBuildFor from '@/components/landing/WhoWeBuildFor';
import HowItWorks from '@/components/landing/HowItWorks';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import CallToAction from '@/components/landing/CallToAction';

const AuroraBackground = React.lazy(() => import('@/components/AuroraBackground'));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <React.Suspense fallback={<div>Loading background...</div>}>
        <AuroraBackground />
      </React.Suspense>
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto max-w-6xl">
            {/* Headline */}
            <div className="relative mb-8 sm:mb-12">
              <div className="radial-glow-behind" />
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block gradient-text text-glow-premium animate-hero-fade-in-up-1">Hello.</span>
                <span className="block gradient-text text-glow-premium animate-hero-fade-in-up-2 mt-2 sm:mt-4">
                  We build ideas into reality.
                </span>
              </h1>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 animate-cta-fade-in">
              <GlassButton to="/build" variant="primary">
                BUILD
              </GlassButton>
              <GlassButton to="/buy" variant="secondary">
                BUY
              </GlassButton>
            </div>
          </div>
        </section>
        
        {/* Content Sections */}
        <section id="why-us" className="scroll-mt-20">
          <WhyVainLabs />
        </section>
        
        <section id="what-we-do" className="scroll-mt-20">
          <WhatWeDo />
        </section>
        
        <section id="who-we-build-for" className="scroll-mt-20">
          <WhoWeBuildFor />
        </section>
        
        <section id="how-it-works" className="scroll-mt-20">
          <HowItWorks />
        </section>
        
        <section id="why-choose-us" className="scroll-mt-20">
          <WhyChooseUs />
        </section>
        
        <section className="scroll-mt-20">
          <CallToAction />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;