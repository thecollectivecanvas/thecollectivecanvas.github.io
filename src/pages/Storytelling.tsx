import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Storytelling = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 md:pb-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-serif">
              Storytelling Through Art
            </h1>
            <p className="text-lg text-foreground/80">
              Coming soon. Stories and artwork from the journey will be featured here.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Storytelling;
