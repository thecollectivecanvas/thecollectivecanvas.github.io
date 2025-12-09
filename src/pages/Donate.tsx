import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DonateComponent from "@/components/Donate";

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <DonateComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
