const WhyChooseUs = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground text-center sm:text-4xl mb-12">Why Choose Vain Labs</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="dark-glass-box">
            <h3 className="text-xl font-bold text-primary">Real Engineering, Not Templates</h3>
            <p className="mt-4 text-muted-foreground">
              We build robust solutions from the ground up, tailored to your specific needs.
            </p>
          </div>
          <div className="dark-glass-box">
            <h3 className="text-xl font-bold text-primary">A Focus on Working Outcomes</h3>
            <p className="mt-4 text-muted-foreground">
              Our goal is to deliver a functional, reliable project, not just lines of code.
            </p>
          </div>
          <div className="dark-glass-box">
            <h3 className="text-xl font-bold text-primary">Clear & Consistent Communication</h3>
            <p className="mt-4 text-muted-foreground">
              You are always in the loop, with direct access to our team throughout the process.
            </p>
          </div>
          <div className="dark-glass-box">
            <h3 className="text-xl font-bold text-primary">Efficient Turnaround</h3>
            <p className="mt-4 text-muted-foreground">
              We respect your timeline, operating with agility to get your project built quickly and correctly.
            </p>
          </div>
          <div className="dark-glass-box">
            <h3 className="text-xl font-bold text-primary">Real-World Impact</h3>
            <p className="mt-4 text-muted-foreground">
              We are driven by creating technology that solves practical problems and has a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;