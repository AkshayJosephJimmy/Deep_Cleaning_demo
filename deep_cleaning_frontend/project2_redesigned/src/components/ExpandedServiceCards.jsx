function ExpandedServiceCards({ service, onClose }) {
  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        {/* Top gradient strip */}
        <div className="h-1.5 bg-gradient-to-r from-sky-400 to-green-400" />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
              <Icon size={32} className="text-sky-500" />
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-red-100 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all duration-200 font-bold text-sm cursor-pointer"
            >
              ✕
            </button>
          </div>

          <h3
            className="text-2xl font-extrabold text-slate-800 mb-3"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {service.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.details}</p>

          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <h4 className="font-bold text-sky-700 text-sm">Note</h4>
            </div>
            <p className="text-sky-600 text-xs leading-relaxed">Price is based on the size of your property and the specific services required.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpandedServiceCards;
