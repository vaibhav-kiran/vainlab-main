import GlassButton from "@/components/GlassButton";

const CallToAction = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-background to-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Ready to bring your idea to life?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Free consultation within 24 hours.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <GlassButton to="/build" variant="primary">Build My Idea</GlassButton>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;