import { IoMdHome } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { PiNewspaperFill } from "react-icons/pi";
import ServiceCards from "./ServiceCards";
import { MdOutlineMoveUp } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { useState } from "react";
import ExpandedServiceCards from "./ExpandedServiceCards";

function Services() {
  const [clickedCard, setClickedCard] = useState(null);

  const services = [
    {
      icon: PiNewspaperFill,
      title: "Standard Cleaning",
      details: "Our Standard Cleaning service includes dusting, vacuuming, mopping, and cleaning of bathrooms and kitchens. It's perfect for regular maintenance and keeping your space tidy.",
      duration: "2–4 hrs",
      tag: "Most Popular"
    },
    {
      icon: IoMdHome,
      title: "Home Cleaning",
      details: "Our Home Cleaning service is tailored to meet the specific needs of residential properties. We clean all rooms, bathrooms, and kitchens thoroughly.",
      duration: "3–5 hrs",
      tag: "Best for Families"
    },
    {
      icon: HiOfficeBuilding,
      title: "Office Cleaning",
      details: "Our Office Cleaning service is designed to keep your workspace clean and professional. We handle all areas of your office including common areas, restrooms, and workstations.",
      duration: "2–6 hrs",
      tag: "For Businesses"
    },
    {
      icon: MdOutlineMoveUp,
      title: "Move-in/Move-out",
      details: "Our Move-in/Move-out Cleaning service ensures your property is spotless before you move in or after you move out. We handle all cleaning tasks to make your transition smooth.",
      duration: "4–8 hrs",
      tag: "Full Property"
    },
    {
      icon: GiVacuumCleaner,
      title: "Deep Cleaning",
      details: "Our Deep Cleaning service goes beyond regular cleaning to tackle tough stains, grime, and dirt. It includes a thorough cleaning of all surfaces, appliances, and hard-to-reach areas.",
      duration: "4–8 hrs",
      tag: "Most Thorough"
    }
  ];

  return (
    <div id="services" className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sky-500 font-semibold text-xs uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Our Services</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            From quick tidy-ups to full deep cleans — we have the right service for every need and budget.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <ServiceCards
              key={index}
              service={service}
              onClick={() => { setClickedCard(index); }}
            />
          ))}
        </div>

        {clickedCard !== null && (
          <ExpandedServiceCards service={services[clickedCard]} onClose={() => setClickedCard(null)} />
        )}
      </div>
    </div>
  );
}
export default Services;
