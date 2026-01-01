const HowItWorks = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground text-center sm:text-4xl">How It Works</h2>
        <div className="mt-12 space-y-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center border border-primary rounded-full text-primary font-bold">1</div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-foreground">Share Your Idea</h3>
              <p className="mt-1 text-muted-foreground">Submit your project concept or choose a ready-made solution.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center border border-primary rounded-full text-primary font-bold">2</div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-foreground">Discussion & Consultation</h3>
              <p className="mt-1 text-muted-foreground">We connect with you to understand your goals, refine the scope, and establish a clear plan.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center border border-primary rounded-full text-primary font-bold">3</div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-foreground">Building & Iteration</h3>
              <p className="mt-1 text-muted-foreground">Our team gets to work, providing regular updates and incorporating feedback in a transparent, agile process.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center border border-primary rounded-full text-primary font-bold">4</div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-foreground">Delivery of Working Solution</h3>
              <p className="mt-1 text-muted-foreground">We deliver a well-documented, functional project that meets your exact requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;