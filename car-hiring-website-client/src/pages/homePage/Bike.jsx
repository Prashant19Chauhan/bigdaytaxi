import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Bikecard from "../../components/bikecard";
import HondaActiva6G from "../../assets/bikes/HondaActiva6G.webp"
import TVSJupiter from "../../assets/bikes/TVSJupiter.webp"
import TVSNtorq125 from "../../assets/bikes/TVSNtorq125.webp"
import SuzukiAccess125 from "../../assets/bikes/SuzukiAccess125.avif"
import YamahaRayZR from "../../assets/bikes/YamahaRayZR.webp"
import HeroMaestroEdge from "../../assets/bikes/HeroMaestroEdge.png"

const Bike = () => {

   const bikes = [
      {
         _id: "1",
         photo: HondaActiva6G,
         title: "Honda Activa 6G",
         location: "Dehradun",
         price: 500,
         fuelType: "Petrol",
         seats: 2,
         speed: "85 km/h"
       },
       {
         _id: "2",
         photo: TVSJupiter,
         title: "TVS Jupiter",
         location: "Dehradun",
         price: 450,
         fuelType: "Petrol",
         seats: 2,
         speed: "80 km/h"
       },
       {
         _id: "3",
         photo: TVSNtorq125,
         title: "TVS Ntorq 125",
         location: "Dehradun",
         price: 600,
         fuelType: "Petrol",
         seats: 2,
         speed: "95 km/h"
       },
       {
         _id: "4",
         photo: SuzukiAccess125,
         title: "Suzuki Access 125",
         location: "Dehradun",
         price: 550,
         fuelType: "Petrol",
         seats: 2,
         speed: "90 km/h"
       },
       {
         _id: "5",
         photo: YamahaRayZR,
         title: "Yamaha Ray ZR",
         location: "Dehradun",
         price: 580,
         fuelType: "Petrol",
         seats: 2,
         speed: "92 km/h"
       },
       {
         _id: "6",
         photo: HeroMaestroEdge,
         title: "Hero Maestro Edge",
         location: "Dehradun",
         price: 520,
         fuelType: "Petrol",
         seats: 2,
         speed: "85 km/h"
       }
    ];
   return (
      <div className="py-20">
         <div className="flex items-center justify-between">
            <div className="space-y-3">
               <h2 className="text-4xl font-semibold">Available Bike & Scooty On Rent</h2>
               <p className="text-gray-600">Rent your vihicle we the trusted bike rental company in Dehradun.</p>
            </div>
            <Link to='/bike-rental' className="bg-black text-white flex items-center space-x-3 py-2 px-6 rounded-md">
               <span className="font-semibold">View More</span>
               <IoIosArrowRoundForward className="text-3xl" />
            </Link>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {
               bikes.map((bike, i) => <Bikecard key={i} bike={bike} />)
            }

         </div>

      </div>
   );
};

export default Bike;