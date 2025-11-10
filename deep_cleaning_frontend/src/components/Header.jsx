import svgLogo from "/Users/akshayjosephjimmy/deep_cleaning_demo/deep_cleaning_frontend/src/assets/cleaning service-bro.svg"




function Header(){


    return(
        <div className="w-full h-60 p-4 bg-linear-to-r from-gray-100 to-green-200 flex">
            <div>

            <h1 className="text-2xl text-black font-bold">Best Deep Cleaning in Kottayam</h1>
            
            <p className="text-xs">Why go else where when we have the best proffesionals in the deep cleaning space</p>
            <button className="text-xs bg-sky-400 p-2 rounded-2xl mt-2">Get started</button>
            </div>
            
               
                
                
            <img src={svgLogo} alt="logo" className="w-40 h-40 "/>
            
            
        </div>
    )

}
export default Header