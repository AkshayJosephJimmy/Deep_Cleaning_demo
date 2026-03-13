function ExpandedServiceCards({ service, onClose }) {
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto p-8 relative animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 flex items-center justify-center font-bold text-gray-500 transition-all duration-200 text-sm"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-5">
          <Icon size={32} className="text-sky-500" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-1">{service.title}</h3>

        {/* Tag + duration */}
        {service.tag && (
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="bg-sky-100 text-sky-600 text-xs font-bold px-3 py-1 rounded-full">{service.tag}</span>
            {service.duration && (
              <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full">⏱ {service.duration}</span>
            )}
          </div>
        )}

        {/* Details */}
        <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">{service.details}</p>

        {/* Pricing note */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl mb-6">
          <div className="flex items-start gap-2">
            <span className="text-amber-500 text-base mt-0.5">ℹ</span>
            <div>
              <h4 className="font-bold text-gray-800 text-sm mb-1">Pricing Note</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Price is based on the size of your property and specific requirements. Contact us for a free quote.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onClose}
          className="w-full bg-sky-500 hover:bg-green-500 text-white py-3 rounded-full font-bold transition-all duration-300 text-sm shadow-md hover:shadow-lg"
        >
          Book This Service →
        </button>
      </div>
    </div>
  );
}
export default ExpandedServiceCards;
