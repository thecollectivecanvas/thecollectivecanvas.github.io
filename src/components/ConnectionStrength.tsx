import paintingImage from "@/assets/painting-forest.jpg";
import { Link } from "react-router-dom";

const ConnectionStrength = () => {
  return (
    <section className="py-24 md:py-36 pb-12 md:pb-16 bg-muted/20 relative overflow-hidden">
      <div className="watercolor-texture absolute inset-0 opacity-30" />
      
      <div className="container mx-auto relative z-10 px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="overflow-hidden">
              <img 
                src={paintingImage} 
                alt="Forest path painting"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center md:text-left px-8 md:px-12 lg:px-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground font-serif leading-tight mb-12">
                Stories from the Earth
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-8">
                A mosaic of narratives across cultures and continents, told through art and multidisciplinary journalism.
              </p>
              <Link 
                to="/about"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              >
                Explore the Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionStrength;
