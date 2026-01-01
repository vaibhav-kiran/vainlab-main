const WhatWeDo = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground text-center sm:text-4xl mb-12">What We Do</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="dark-glass-box">
            <h3 className="text-2xl font-bold text-primary">Ready-Made Projects</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Pre-built, documented, and reliable projects designed for immediate use. Perfect for students needing a solid foundation, innovators prototyping a feature, or teams looking to accelerate their learning.
            </p>
          </div>
          <div className="dark-glass-box">
            <h3 className="text-2xl font-bold text-primary">Custom Project Building</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              End-to-end development for your unique vision. We work with you from idea validation and strategic planning all the way to a functional, deployed prototype. Your concept, engineered by us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;