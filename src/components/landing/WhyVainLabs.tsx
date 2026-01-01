import { Zap, Target, Rocket } from 'lucide-react';

const WhyVainLabs = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[hsl(var(--gradient-gold))] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold gradient-text">
            Why Vain Labs Exists
          </h2>
        </div>

        {/* Main statement - large and impactful */}
        <div className="glass-strong py-10 sm:py-12 px-6 sm:px-10 md:px-16 rounded-3xl mb-6 sm:mb-8 relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--gradient-gold))] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              <span className="gradient-text">Countless ideas fail</span>, not because they lack merit,
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 leading-relaxed mb-4">
              but because they lack the <span className="text-primary font-semibold">time</span>, <span className="text-primary font-semibold">technical guidance</span>, or <span className="text-primary font-semibold">focused execution</span> needed to make them real.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-6"></div>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
              <span className="gradient-text text-glow-premium">VAIN LABS</span> was created to bridge that gap.
            </p>
          </div>
        </div>

        {/* Key points grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-strong p-6 sm:p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">Remove Barriers</h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              We eliminate the obstacles between your concept and its creation
            </p>
          </div>

          <div className="glass-strong p-6 sm:p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">Focused Execution</h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Turning promising ideas into tangible, working solutions
            </p>
          </div>

          <div className="glass-strong p-6 sm:p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">Clarity & Purpose</h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Every project built with intention and clear direction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVainLabs;