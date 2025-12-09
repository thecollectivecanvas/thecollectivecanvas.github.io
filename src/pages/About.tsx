import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Mission from "@/components/Mission";
import aboutImage from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Mission />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[350px_1fr] gap-8 items-start">
              <div className="overflow-hidden rounded-lg shadow-medium border border-border">
                <img 
                  src={aboutImage} 
                  alt="Ramona Mraz with backpack"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-6 text-foreground/90">
                <h1 className="text-3xl md:text-4xl font-light text-foreground font-serif mb-8">
                  About the Artist
                </h1>
                <p className="leading-relaxed">
                  Hi I'm Ramona, a multidisciplinary artist and writer. My practice centers on watercolor and acrylic landscape paintings that explore narratives of the Earth and human-land relationships.
                </p>
                <p className="leading-relaxed">
                  I'm an ecologist by training, and I've recently completed my master's in sustainable development. I feel that both practices stem from the practice of observation of the natural world, and the stories of Place.
                </p>
                <p className="leading-relaxed">
                  I hiked a number of long-distance backpacking "thru-hikes" such as those on the Appalachian and Pacific Crest trails. During these extended hikes, I find it's much easier to be in resonance with my environment- and myself, and be present in my creative endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
