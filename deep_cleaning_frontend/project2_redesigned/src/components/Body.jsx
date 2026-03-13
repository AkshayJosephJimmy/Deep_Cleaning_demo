import Hero from "./Hero";
import Services from "./Services";
import Banner from "./Banner";
import Stats from "./Stats";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Body() {
  return (
    <div className="bg-white">
      <Stats />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  );
}
export default Body;
