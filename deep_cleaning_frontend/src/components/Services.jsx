
import { IoMdHome } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { PiNewspaperFill } from "react-icons/pi";
import ServiceCards from "./ServiceCards";


function Services() {
    const services = [{
        icon:IoMdHome,
        title:"Home Cleaning"
    },
    {icon:HiOfficeBuilding,
    title:"Office Cleaning"
},{
    icon:PiNewspaperFill,
    title:"Carpet Cleaning"
}];
  return (
    <div className="services-container ">
      <h1 className="text-3xl mt-20 text font-bold  text-center p-10 md:text-4xl ">Our Services</h1>
      <div className="md:flex flex-row md:justify-center md:gap-6 p-4 md:p-10 ">

      {services.map((service,index)=>(
          <ServiceCards key={index} service={service}  />
        ))}
        </div>
     
    </div>
  );
}
export default Services;






