import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ConnectionStrength from "@/components/ConnectionStrength";
import JourneyMap from "@/components/JourneyMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <Hero />
        <ConnectionStrength />
        <JourneyMap />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
