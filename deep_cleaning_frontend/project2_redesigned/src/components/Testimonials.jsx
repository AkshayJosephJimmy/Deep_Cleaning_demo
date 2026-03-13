import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Priya Menon",
      role: "Homeowner, Kottayam",
      rating: 5,
      text: "Absolutely amazing service! The team was professional, thorough, and left my home spotless. My kitchen looks brand new. Will definitely book again!"
    },
    {
      name: "Rajesh Kumar",
      role: "Office Manager, Kottayam",
      rating: 5,
      text: "We use SparkleClean for our office every week. Consistent quality and always on time. Our workspace has never looked this clean and organized."
    },
    {
      name: "Anjali Thomas",
      role: "Property Owner",
      rating: 5,
      text: "Hired them for move-out cleaning and they exceeded all expectations. Got my full security deposit back! Highly recommend to everyone."
    }
  ];

  const avatarColors = ["#0ea5e9", "#22c55e", "#a855f7"];

  return (
    <div id="testimonials" className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sky-500 font-semibold text-xs uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">What Our Customers Say</h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Trusted by hundreds of happy customers across Kottayam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col"
            >
              <FaQuoteLeft className="text-sky-200 mb-4 flex-shrink-0" size={28} />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} className="text-amber-400" size={14} />
                ))}
                <span className="text-xs text-gray-400 ml-1">{t.rating}.0</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-md"
                  style={{ backgroundColor: avatarColors[i] }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating strip */}
        <div className="mt-12 bg-sky-600 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="text-center md:text-left">
            <p className="text-sky-200 text-sm font-medium mb-1">Overall Customer Rating</p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-5xl font-extrabold">4.9</span>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-amber-300" size={18} />)}
                </div>
                <p className="text-sky-200 text-xs mt-0.5">Based on 500+ reviews</p>
              </div>
            </div>
          </div>
          <div className="w-px h-16 bg-sky-500 hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-extrabold">98%</p>
            <p className="text-sky-200 text-sm mt-1">Would recommend to a friend</p>
          </div>
          <div className="w-px h-16 bg-sky-500 hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-extrabold">500+</p>
            <p className="text-sky-200 text-sm mt-1">Happy customers served</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
