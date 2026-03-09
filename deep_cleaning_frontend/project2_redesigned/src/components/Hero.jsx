import { IoPeopleSharp, IoTimerOutline } from "react-icons/io5";
import { FaLeaf, FaRegThumbsUp } from "react-icons/fa";
import HeroCards from "./HeroCards";

function Hero() {
  const features = [
    { icon: IoPeopleSharp, title: "Professional Staff", description: "Trained and experienced cleaning professionals." },
    { icon: IoTimerOutline, title: "Timely Service", description: "Right on schedule, every time." },
    { icon: FaLeaf, title: "Eco-Friendly", description: "Environmentally friendly cleaning products and methods." },
    { icon: FaRegThumbsUp, title: "100% Satisfaction", description: "Guaranteed satisfaction with us" },
  ];

  return (
    <section className="bg-slate-50 px-4 pt-12 pb-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-sky-500 text-xs font-bold uppercase tracking-widest mb-3">Our Commitment</span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Why Choose Us
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-green-400 rounded-full mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {features.map((feature, index) => (
            <HeroCards key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Hero;
