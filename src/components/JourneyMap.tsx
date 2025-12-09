import routeMapImage from "@/assets/route-map.png";
import { Link } from "react-router-dom";

const JourneyMap = () => {
  return (
    <section id="map" className="py-12 md:py-16 bg-muted/10 relative overflow-hidden">
      <div className="watercolor-texture absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-0 relative z-10">
        <div className="text-center mb-8 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground font-serif">
            The Route
          </h2>
          <div className="flex justify-center mt-4">
            <svg width="120" height="20" viewBox="0 0 120 20" className="text-foreground/40">
              <path d="M 10 10 L 110 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="2,3"/>
              <path d="M 105 5 L 115 10 L 105 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mb-8">
          <img 
            src={routeMapImage}
            alt="Global walking route across five continents"
            className="w-full"
          />
        </div>
        
        <div className="text-center px-4">
          <div className="text-base text-muted-foreground mb-12 space-y-0.5">
            <p>Punta Arenas, Chile - Cape Town, South Africa</p>
            <p>56,000 km</p>
            <p>45 Countries</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-foreground mb-2">October 2026</p>
            <p className="text-xl text-muted-foreground">The Journey begins</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyMap;
