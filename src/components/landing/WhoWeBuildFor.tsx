const WhoWeBuildFor = () => {
  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl relative">
        {/* Mind Map Lines Container */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ height: '100%' }}>
          {/* Desktop: 4 columns - Curved lines from center heading to each box */}
          <svg 
            className="absolute hidden lg:block w-full"
            style={{ 
              height: '100%',
              top: 0,
              left: 0
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="mindMapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--gradient-gold))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--gradient-gold))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Line to Students (1st box - leftmost) */}
            <path
              d="M 50 10 Q 28 22, 12.5 32"
              stroke="url(#mindMapGradient)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="3,2"
            />
            {/* Line to Researchers (2nd box) */}
            <path
              d="M 50 10 Q 38 22, 37.5 32"
              stroke="url(#mindMapGradient)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="3,2"
            />
            {/* Line to Startups (3rd box) */}
            <path
              d="M 50 10 Q 62 22, 62.5 32"
              stroke="url(#mindMapGradient)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="3,2"
            />
            {/* Line to Independent Innovators (4th box - rightmost) */}
            <path
              d="M 50 10 Q 72 22, 87.5 32"
              stroke="url(#mindMapGradient)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="3,2"
            />
          </svg>

          {/* Tablet: 2x2 grid - Curved lines from center heading to boxes */}
          <svg 
            className="absolute hidden md:block lg:hidden w-full"
            style={{ 
              height: '100%',
              top: 0,
              left: 0
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="mindMapGradientTablet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--gradient-gold))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--gradient-gold))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Line to Students (top-left) */}
            <path
              d="M 50 10 Q 32 28, 12.5 38"
              stroke="url(#mindMapGradientTablet)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="3,2"
            />
            {/* Line to Researchers (top-right) */}
            <path
              d="M 50 10 Q 68 28, 87.5 38"
              stroke="url(#mindMapGradientTablet)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="3,2"
            />
            {/* Line to Startups (bottom-left) */}
            <path
              d="M 50 10 Q 32 52, 12.5 72"
              stroke="url(#mindMapGradientTablet)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="3,2"
            />
            {/* Line to Independent Innovators (bottom-right) */}
            <path
              d="M 50 10 Q 68 52, 87.5 72"
              stroke="url(#mindMapGradientTablet)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="3,2"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 gradient-text relative">
            Who We Build For
            {/* Connection point indicator on heading */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary rounded-full opacity-70 hidden md:block"></span>
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="glass-strong p-6 sm:p-8 rounded-2xl h-full flex flex-col text-center relative z-10 group">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-70 hidden md:block"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Students</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
                Accelerate your learning and build a standout portfolio with projects that work.
              </p>
            </div>
            <div className="glass-strong p-6 sm:p-8 rounded-2xl h-full flex flex-col text-center relative z-10 group">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-70 hidden md:block"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Researchers</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
                Get the technical support you need to validate a hypothesis or build a proof-of-concept without distraction.
              </p>
            </div>
            <div className="glass-strong p-6 sm:p-8 rounded-2xl h-full flex flex-col text-center relative z-10 group">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-70 hidden md:block"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Startups</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
                Move faster with a reliable technical partner to build your MVP or core product features.
              </p>
            </div>
            <div className="glass-strong p-6 sm:p-8 rounded-2xl h-full flex flex-col text-center relative z-10 group">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-70 hidden md:block"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Independent Innovators</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
                Bring your passion project to life with expert guidance and engineering you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeBuildFor;