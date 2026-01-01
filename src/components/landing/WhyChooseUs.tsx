const WhyChooseUs = () => {
  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 gradient-text">
          Why Choose Vain Labs
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="glass-strong h-full p-6 sm:p-8 rounded-2xl flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Real Engineering, Not Templates</h3>
            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
              We build robust solutions from the ground up, tailored to your specific needs.
            </p>
          </div>
          <div className="glass-strong h-full p-6 sm:p-8 rounded-2xl flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">A Focus on Working Outcomes</h3>
            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
              Our goal is to deliver a functional, reliable project, not just lines of code.
            </p>
          </div>
          <div className="glass-strong h-full p-6 sm:p-8 rounded-2xl flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Clear & Consistent Communication</h3>
            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
              You are always in the loop, with direct access to our team throughout the process.
            </p>
          </div>
          <div className="glass-strong h-full p-6 sm:p-8 rounded-2xl flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Efficient Turnaround</h3>
            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
              We respect your timeline, operating with agility to get your project built quickly and correctly.
            </p>
          </div>
          <div className="glass-strong h-full p-6 sm:p-8 rounded-2xl flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Real-World Impact</h3>
            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
              We are driven by creating technology that solves practical problems and has a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;