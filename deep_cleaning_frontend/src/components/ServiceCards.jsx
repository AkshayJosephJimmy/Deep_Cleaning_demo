import { HiOfficeBuilding } from "react-icons/hi";





function ServiceCards({service, onClick}) {
  
    const Icon = service.icon;
  return (
    
    <div onClick={onClick} className="w-full h-40 bg-gray-100 shadow my-2 rounded-2xl flex flex-col items-center justify-center gap-2 p-4  md:w-60 md:h-60 md:rounded-3xl md:shadow-lg hover:shadow-xl hover:bg-sky-300 transition-all duration-300">
        <Icon size={40} className="text-sky-400 mx-auto"/>
        <h2 className="mx-auto text-center">{service.title}</h2>
        <p className="text-blue-500">Learn more</p>
      
    </div>
  );
}export default ServiceCards;