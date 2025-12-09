import heroImage from "@/assets/hero-mountains.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hiker overlooking mountain landscape" className="w-full h-full object-cover object-[80%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
      </div>

      {/* Content - Bottom Left */}
      <div className="relative z-10 container mx-auto px-8 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-background font-serif font-medium mb-4 animate-fade-in-up">
            The Collective Canvas
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-background font-light font-serif leading-relaxed animate-fade-in-up">
            A journey on foot around the world
            <br />
            exploring human-land relationships
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;