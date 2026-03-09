function HeroCards({ feature }) {
  const Icon = feature.icon;
  return (
    <div className="group flex flex-col items-center bg-white rounded-2xl p-5 md:p-7 shadow-sm hover:shadow-lg border border-slate-100 hover:border-sky-200 transition-all duration-300 w-full">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-green-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon size={26} className="text-sky-500" />
      </div>
      <h2 className="text-sm md:text-base font-bold text-slate-800 text-center mt-1">{feature.title}</h2>
      <p className="text-slate-500 text-xs md:text-sm text-center mt-2 leading-relaxed">{feature.description}</p>
    </div>
  );
}
export default HeroCards;
