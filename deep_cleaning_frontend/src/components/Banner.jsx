import { Link } from "react-router-dom";


function Banner(){


return(
<div className="w-full h-40 bg-sky-600 flex flex-col justify-center items-center gap-3">
    <p className="text-white text-center text-lg font-semibold">Ready for a spotless space</p>
    <Link to={"/booking"}><button className="h-fit w-fit p-2 bg-white rounded-2xl text-sm font-semibold hover:bg-green-400 transition-all duration-300 ">Book now</button></Link>

</div>

)

}
export default Banner;











