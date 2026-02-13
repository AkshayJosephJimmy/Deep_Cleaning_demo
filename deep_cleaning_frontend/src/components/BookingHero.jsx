import BookingImg from "/Users/akshayjosephjimmy/deep_cleaning_demo/deep_cleaning_frontend/src/assets/man-cleaning-window.jpg"



function BookingHero() {
  return (
    <div className="w-full h-70 bg-gray-400 shadow-md flex justify-center items-center">
        <img src={BookingImg} alt="Cleaning Service" className=" w-full h-full object-cover"/>
     
    </div>
  );
}
export default BookingHero;