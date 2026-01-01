const WhatWeDo = () => {
  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 gradient-text">
          What We Do
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="dark-glass-box h-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Ready-Made Projects</h3>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Pre-built, documented, and reliable projects designed for immediate use. Perfect for students needing a solid foundation, innovators prototyping a feature, or teams looking to accelerate their learning.
            </p>
          </div>
          <div className="dark-glass-box h-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Custom Project Building</h3>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              End-to-end development for your unique vision. We work with you from idea validation and strategic planning all the way to a functional, deployed prototype. Your concept, engineered by us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;