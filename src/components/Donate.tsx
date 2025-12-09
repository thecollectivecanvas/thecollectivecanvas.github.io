import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import photoMountains from "@/assets/photo-mountains-wide.jpg";

const Donate = () => {
  return (
    <section id="donate" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="watercolor-texture absolute inset-0 opacity-30" />
      
      <div className="container mx-auto relative z-10 px-0">
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden mb-12">
            <img 
              src={photoMountains} 
              alt="Hiking in mountain landscape"
              className="w-full h-auto"
            />
          </div>
          
          <div className="text-center px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 font-serif leading-tight">
            Support the Journey
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            At present, this journey is self-funded with support from individuals who believe in the power of 
            resonant storytelling and slow-journalism. If you feel comfortable to make a contribution, you can follow the link to my Substack.
          </p>

          <a 
            href="https://mollyramona.substack.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg mb-6"
          >
            Substack
          </a>

          <p className="text-sm text-muted-foreground italic mb-12">
            All contributions will go directly toward journey expenses and storytelling resources including equipment and gear, documentation and art materials, and food/accommodation (when I'm not in the tent).
          </p>

          <div className="bg-card rounded-2xl p-8 border border-border mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-foreground mb-6 font-serif">
              Connect
            </h3>
            <div className="space-y-4 text-foreground/80">
              <p>Follow the journey and explore more:</p>
              <div className="flex flex-col gap-3">
                <a href="https://www.instagram.com/mollyramona/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a>
                <a href="https://www.ramonamraz.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Art</a>
                <a href="https://mollyramona.substack.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Read My Writing on Substack</a>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
