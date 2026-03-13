function ServiceCards({ service, onClick }) {
  const Icon = service.icon;
  return (
    <div
      onClick={onClick}
      className="w-full bg-white border border-gray-100 shadow-md my-2 rounded-2xl flex flex-col items-center justify-center gap-3 p-6 md:w-56 md:rounded-3xl hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
    >
      <div className="w-14 h-14 rounded-2xl bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center transition-colors duration-300">
        <Icon size={28} className="text-sky-500" />
      </div>
      <h2 className="font-bold text-gray-800 text-center text-sm md:text-base">{service.title}</h2>
      <span className="text-sky-500 text-xs font-semibold flex items-center gap-1 group-hover:text-sky-600">
        Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </span>
    </div>
  );
}
export default ServiceCards;
