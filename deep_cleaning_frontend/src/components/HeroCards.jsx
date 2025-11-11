
import {IoPeopleSharp} from "react-icons/io5";


function HeroCards({feature}) {
    const Icon = feature.icon;
  return (
    <div className="flex flex-col items-center  w-40 h-40 mx-auto p-4 rounded-2xl shadow md:w-60 md:h-60 md:p-6 md:rounded-3xl md:shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <Icon size={40} className="text-green-400 "/>
        <h2 className="text-sm font-semibold mt-2 mx-auto md:text-xl">{feature.title}</h2>
        <p className="text-gray-600 text-xs text-center mt-2  mx-auto md:text-base">{feature.description}</p>
        

      
    </div>
  );
}
export default HeroCards;






