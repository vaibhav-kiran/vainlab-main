import GlassButton from "@/components/GlassButton";

const CallToAction = () => {
  return (
    <div className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="dark-glass-box grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center p-8 sm:p-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-4">
              Ready to bring your idea to life?
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Free consultation within 24 hours.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <GlassButton to="/build" variant="primary" subtitle="Start your project today">
              Let's Build!
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;