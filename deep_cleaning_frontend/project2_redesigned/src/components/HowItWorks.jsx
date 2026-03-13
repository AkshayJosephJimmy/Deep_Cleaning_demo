import { FaCalendarAlt, FaSprayCan, FaSmileBeam } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: FaCalendarAlt,
      step: "01",
      title: "Book Online",
      desc: "Choose your service, pick a date and time that works for you, and submit your booking in just a few minutes."
    },
    {
      icon: FaSprayCan,
      step: "02",
      title: "We Clean",
      desc: "Our trained professionals arrive on time and get to work using eco-friendly products and proven techniques."
    },
    {
      icon: FaSmileBeam,
      step: "03",
      title: "You Relax",
      desc: "Sit back and enjoy your spotless space. 100% satisfaction guaranteed or we'll come back for free."
    }
  ];

  return (
    <div id="how-it-works" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sky-500 font-semibold text-xs uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">How It Works</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Getting a professional clean has never been easier. Three simple steps to a spotless space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/4 right-1/4 h-0.5 bg-sky-200 z-0" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow text-center z-10 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-extrabold text-sm mx-auto mb-5 shadow-lg">
                  {s.step}
                </div>
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={30} className="text-sky-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
