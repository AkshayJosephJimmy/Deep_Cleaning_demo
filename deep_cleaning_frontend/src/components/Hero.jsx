import { IoPeopleSharp, IoTimerOutline } from "react-icons/io5";
import { FaLeaf, FaRegThumbsUp } from "react-icons/fa";
import HeroCards from "./HeroCards";

function Hero() {
  const features = [
    {
      icon: IoPeopleSharp,
      title: "Professional Staff",
      description: "Trained, background-checked, and experienced cleaning professionals."
    },
    {
      icon: IoTimerOutline,
      title: "Timely Service",
      description: "Right on schedule, every time — we respect your time."
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "Safe, environmentally friendly products that protect your family and the planet."
    },
    {
      icon: FaRegThumbsUp,
      title: "100% Satisfaction",
      description: "Not happy? We'll come back and clean again at no extra cost."
    }
  ];

  return (
    <div id="why-us" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sky-500 font-semibold text-xs uppercase tracking-widest">Our Promise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Why Choose Us</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm md:text-base">
            We combine professional expertise with genuine care to deliver a cleaning experience you can trust.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {features.map((feature, index) => (
            <HeroCards key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Hero;
