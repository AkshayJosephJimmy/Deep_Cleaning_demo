import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-2">
          <h3 className="text-2xl font-extrabold text-white mb-1">
            Sparkle<span className="text-sky-400">Clean</span>
          </h3>
          <p className="text-gray-400 text-sm mb-5 max-w-sm leading-relaxed mt-2">
            Kottayam's most trusted deep cleaning service. Professional, eco-friendly, and guaranteed to leave your space spotless.
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-sky-600 hover:bg-sky-500 p-2.5 rounded-xl transition-colors" aria-label="Facebook">
              <FaFacebook size={16} />
            </a>
            <a href="#" className="bg-pink-600 hover:bg-pink-500 p-2.5 rounded-xl transition-colors" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-green-600 hover:bg-green-500 p-2.5 rounded-xl transition-colors" aria-label="WhatsApp">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-bold mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Standard Cleaning", "Home Cleaning", "Office Cleaning", "Deep Cleaning", "Move-in/Move-out"].map(s => (
              <li key={s} className="hover:text-sky-400 cursor-pointer transition-colors">{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-bold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <FaPhone className="text-sky-400 flex-shrink-0" size={12} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-sky-400 flex-shrink-0" size={12} />
              <span>hello@sparkleclean.in</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-sky-400 flex-shrink-0 mt-0.5" size={12} />
              <span>Kottayam, Kerala, India</span>
            </li>
          </ul>
          <Link to="/booking">
            <button className="mt-5 bg-sky-500 hover:bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 w-full shadow-md hover:shadow-lg">
              Book a Service
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
        <p>© 2025 SparkleClean. All rights reserved.</p>
        <p>Made with ❤️ in Kottayam, Kerala</p>
      </div>
    </footer>
  );
}
export default Footer;
