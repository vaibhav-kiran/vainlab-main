import GlassButton from "@/components/GlassButton";

const CallToAction = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
        Ready to bring your idea to life?
      </h2>
      <div className="mt-8 flex justify-center gap-6">
        <GlassButton to="/buy" variant="secondary">Buy a Project</GlassButton>
        <GlassButton to="/build" variant="primary">Build My Idea</GlassButton>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Free consultation within 24 hours.
      </p>
    </div>
  );
};

export default CallToAction;