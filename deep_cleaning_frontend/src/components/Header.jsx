import svgLogo from "/Users/akshayjosephjimmy/deep_cleaning_demo/deep_cleaning_frontend/src/assets/cleaning service-bro.svg"




function Header(){


    return(
        <div className="w-full h-60 p-4 bg-linear-to-r from-gray-100 to-green-200 flex md:justify-between items-center ">
            <div className="flex flex-col gap-2 md:ml-50">

            <h1 className="text-2xl text-black font-bold md:text-5xl">Best Deep Cleaning in Kottayam</h1>
            
            <p className="text-xs md:text-base">Why go else where when we have the best proffesionals in the deep cleaning space</p>
            <button className="text-xs text-white w-fit bg-sky-400 p-2 rounded-2xl mt-2 md:text-lg md:rounded-4xl">Book Now</button>
            </div>
            
               
                
                
            <img src={svgLogo} alt="logo" className="w-40 h-40 md:size-100"/>
            
            
        </div>
    )

}
export default Header