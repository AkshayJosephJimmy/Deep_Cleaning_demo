import { FaUsers, FaStar, FaAward, FaCalendarCheck } from "react-icons/fa";

function Stats() {
  const stats = [
    { icon: FaUsers, value: "500+", label: "Happy Clients" },
    { icon: FaStar, value: "4.9/5", label: "Average Rating" },
    { icon: FaAward, value: "5+", label: "Years Experience" },
    { icon: FaCalendarCheck, value: "2,000+", label: "Bookings Completed" },
  ];

  return (
    <div className="bg-sky-600 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="flex flex-col items-center text-white text-center">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/50 flex items-center justify-center mb-3">
                <Icon size={22} className="text-sky-100" />
              </div>
              <span className="text-3xl md:text-4xl font-extrabold">{stat.value}</span>
              <span className="text-sky-200 text-xs md:text-sm mt-1 font-medium">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Stats;
