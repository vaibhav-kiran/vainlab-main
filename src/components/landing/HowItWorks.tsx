const HowItWorks = () => {
  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 gradient-text">
          How It Works
        </h2>
        <div className="dark-glass-box space-y-6 sm:space-y-8">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center border-2 border-primary rounded-full text-primary font-bold text-lg sm:text-xl">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Share Your Idea</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Submit your project concept or choose a ready-made solution.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center border-2 border-primary rounded-full text-primary font-bold text-lg sm:text-xl">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Discussion & Consultation</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                We connect with you to understand your goals, refine the scope, and establish a clear plan.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center border-2 border-primary rounded-full text-primary font-bold text-lg sm:text-xl">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Building & Iteration</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Our team gets to work, providing regular updates and incorporating feedback in a transparent, agile process.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center border-2 border-primary rounded-full text-primary font-bold text-lg sm:text-xl">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Delivery of Working Solution</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                We deliver a well-documented, functional project that meets your exact requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;