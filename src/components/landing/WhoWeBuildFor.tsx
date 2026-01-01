const WhoWeBuildFor = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground text-center sm:text-4xl">Who We Build For</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">Students</h3>
            <p className="mt-4 text-muted-foreground">
              Accelerate your learning and build a standout portfolio with projects that work.
            </p>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">Researchers</h3>
            <p className="mt-4 text-muted-foreground">
              Get the technical support you need to validate a hypothesis or build a proof-of-concept without distraction.
            </p>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">Startups</h3>
            <p className="mt-4 text-muted-foreground">
              Move faster with a reliable technical partner to build your MVP or core product features.
            </p>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">Independent Innovators</h3>
            <p className="mt-4 text-muted-foreground">
              Bring your passion project to life with expert guidance and engineering you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeBuildFor;