function HeroCards({ feature }) {
  const Icon = feature.icon;
  return (
    <div className="flex flex-col items-center text-center p-5 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 hover:-translate-y-1 group cursor-default">
      <div className="w-14 h-14 rounded-2xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center mb-4 transition-colors duration-300">
        <Icon size={28} className="text-green-500" />
      </div>
      <h2 className="text-sm md:text-base font-bold text-gray-800 mb-2">{feature.title}</h2>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}
export default HeroCards;
