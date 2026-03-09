function ServiceCards({ service, onClick }) {
  const Icon = service.icon;
  return (
    <div
      onClick={onClick}
      className="group bg-white border border-slate-100 rounded-2xl p-5 md:p-7 flex flex-col items-center gap-3 cursor-pointer shadow-sm hover:shadow-lg hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 w-full md:w-52"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center group-hover:from-sky-400 group-hover:to-sky-500 transition-all duration-300">
        <Icon size={28} className="text-sky-500 group-hover:text-white transition-colors duration-300" />
      </div>
      <h2 className="text-sm font-bold text-slate-800 text-center leading-tight">{service.title}</h2>
      <span className="text-xs font-semibold text-sky-500 group-hover:text-green-500 transition-colors duration-200 flex items-center gap-1">
        Learn more
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
}
export default ServiceCards;
