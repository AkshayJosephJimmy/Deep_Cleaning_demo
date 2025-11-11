import { IoPeopleSharp ,IoTimerOutline } from "react-icons/io5";
import { FaLeaf,FaRegThumbsUp } from "react-icons/fa";
import HeroCards from "./HeroCards";


function Hero(){

const features=[{
    icon:IoPeopleSharp,
    title:"Professional Staff",
    description:"Trained and experienced cleaning professionals."
},
{
    icon:IoTimerOutline,
    title:"Timely Service",
    description:"Right on schedule, every time."
},
{
    icon:FaLeaf,
    title:"Eco-Friendly",
    description:"Environmentally friendly cleaning products and methods."
},{
    icon:FaRegThumbsUp,
    title:"100% Satisfaction",
    description:"Garanteed satisfaction with us"
}

]



    return(
        <div >
            <h1 className="text-3xl font-bold bg-green-200 text-center p-10 md:text-4xl md:bg-gray-50">Why Choose us</h1>
            <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-6 p-4">

             {features.map((feature,index)=>(<HeroCards key={index} feature={feature}/>))}
            </div>
            

        </div>
    )
}
export default Hero