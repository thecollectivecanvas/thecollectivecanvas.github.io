import photoMountains from "@/assets/photo-mountains.jpg";
import paintingImage from "@/assets/painting-outdoors.jpg";
const Mission = () => {
  return <section id="mission" className="bg-background relative overflow-hidden">
      <div className="watercolor-texture absolute inset-0 opacity-50" />
      
      {/* Full bleed image with text overlay */}
      <div className="relative w-full">
        <img src={photoMountains} alt="Mountain valley landscape" className="w-full h-auto object-cover" />
        
        {/* Text overlay at bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-background/90 font-serif leading-tight max-w-4xl">
            What is your relationship to the natural world?
          </h2>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-12 pb-20">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Human-Land Kinships Section */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-light text-foreground font-serif text-left">
              Human-Land Kinships
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90 text-left">
              The Collective Canvas is a global storytelling journey exploring how our relationships with the planet affect our mutual flourishing. Following a 56,000 kilometer path across 5 continents, the project will gather stories across varying cultures, landscapes, and ways of knowing, drawing a narrative of connected relations and shared "Planetarity." Using a transdisciplinary blend of art, writing, and ecology, it seeks to illuminate relationality through lived experiences and place-based knowledge.
            </p>
          </div>

          {/* Resonance through Slow-Storytelling Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-light text-foreground font-serif">
                Resonance through Slow-Storytelling
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90">
                Walking cultivates an intimate, slow, and resonant exploration of narratives, a relationship between the storyteller and story-sharer, and the documentation of and places only accessible on foot. In the face of global change and social acceleration, narratives of resonance —fundamental "being" in mutual responsiveness with the world—emphasize how connection to the planet is key to human flourishing.
              </p>
            </div>
            
            <div className="overflow-hidden rounded-xl shadow-medium border border-border">
              <img src={paintingImage} alt="Ramona painting in nature" className="w-full h-auto" />
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default Mission;