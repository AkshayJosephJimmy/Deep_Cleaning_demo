


function ExpandedServiceCards({service, onClose}) {


const Icon = service.icon;


return(

    <div className="fixed bg-black/50  inset-0">
        <div className="w-100 h-fit bg-white relative m-auto top-30 p-10 rounded-2xl">
            <Icon size={50} className="text-sky-400 mx-auto mt-4"/>
            <h3 className="text-4xl text-center font-bold ">{service.title}</h3>
            <p className="p-7 text-xl font-medium">{service.details}</p>

            <span onClick={onClose} className="absolute top-2 font-bold right-2 text-xl cursor-pointer hover:text-red-500">x</span>

            <div className="bg-gray-100 p-4 rounded-lg mt-6">
                <h4 className="font-bold">Note</h4>
                <p>Price is based on the size of your property and the specific services required.</p>
            </div>



        </div>

    </div>
)

}
export default ExpandedServiceCards;














