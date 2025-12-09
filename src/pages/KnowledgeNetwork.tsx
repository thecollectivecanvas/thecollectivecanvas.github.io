import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import artPortfolio from "@/assets/art-portfolio.jpg";
import writingPortfolio from "@/assets/writing-portfolio.jpg";

const KnowledgeNetwork = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 md:pb-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground/80 mb-12">
              The Collective Canvas is dedicated to sharing the stories and knowledge forms gathered along the journey. Check back for updates and posts following the journey's start (October 2026).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
              <a 
                href="https://ramonamraz.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl transition-transform hover:scale-105"
              >
                <img 
                  src={artPortfolio} 
                  alt="Artworks and projects" 
                  className="w-full aspect-square object-cover"
                />
                <div className="mt-4 bg-foreground/5 p-4 rounded-lg">
                  <h3 className="text-2xl font-serif text-foreground/95 group-hover:text-primary transition-colors">
                    Artworks and projects
                  </h3>
                </div>
              </a>
              
              <a 
                href="https://mollyramona.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl transition-transform hover:scale-105"
              >
                <img 
                  src={writingPortfolio} 
                  alt="Writing" 
                  className="w-full aspect-square object-cover"
                />
                <div className="mt-4 bg-foreground/5 p-4 rounded-lg">
                  <h3 className="text-2xl font-serif text-foreground/95 group-hover:text-primary transition-colors">
                    Writing
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KnowledgeNetwork;
