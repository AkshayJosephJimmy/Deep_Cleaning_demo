
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
    const services = [{
    icon:PiNewspaperFill,
    title:"Standard Cleaning",
    details:"Our Standard Cleaning service includes dusting, vacuuming, mopping, and cleaning of bathrooms and kitchens. It's perfect for regular maintenance and keeping your space tidy."
},{
        icon:IoMdHome,
        title:"Home Cleaning",
        details:"Our Home Cleaning service is tailored to meet the specific needs of residential properties. We clean all rooms, bathrooms, and kitchens thoroughly."
    },
    {icon:HiOfficeBuilding,
    title:"Office Cleaning",
    details:"Our Office Cleaning service is designed to keep your workspace clean and professional. We handle all areas of your office including common areas, restrooms, and workstations."
},
{
  icon:MdOutlineMoveUp,
  title:"Move-in/Move-out Cleaning",
  details:"Our Move-in/Move-out Cleaning service ensures your property is spotless before you move in or after you move out. We handle all cleaning tasks to make your transition smooth."
},
{
  icon:GiVacuumCleaner,
  title:"Deep Cleaning",
  details:"Our Deep Cleaning service goes beyond regular cleaning to tackle tough stains, grime, and dirt. It includes a thorough cleaning of all surfaces, appliances, and hard-to-reach areas."
}];


  return (
    <div className="services-container ">
      <h1 className="text-3xl mt-20 text font-bold  text-center p-10 md:text-4xl ">Our Services</h1>
      <div className="md:flex flex-row md:justify-center md:gap-6 p-4 md:p-10  flex-wrap">

      {services.map((service,index)=>(
          <ServiceCards key={index} service={service} onClick={() => {setClickedCard(index); console.log(index);}} />
          
        ))}
        {clickedCard !==null && <ExpandedServiceCards service={services[clickedCard]} onClose={() => setClickedCard(null)} />}
        </div>
     
    </div> 
  );
}
export default Services;






