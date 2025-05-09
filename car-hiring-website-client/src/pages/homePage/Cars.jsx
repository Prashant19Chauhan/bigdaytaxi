import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../../components/Card";

import swiftDzire from "../../assets/cars/Swift-Dzire.avif"
import toyotaInnovaCrysta from "../../assets/cars/toyotaInnovaCrysta.png"
import marutiErtiga from "../../assets/cars/marutiErtiga.png"
import HyundaiI20 from "../../assets/cars/HyundaiI20.jpg"
import HyundaiVenue from "../../assets/cars/HyundaiVenue.avif"
import MarutiBrezza from "../../assets/cars/MarutiBrezza.avif"

const Cars = () => {

   const cars = [
      {
         _id: "1",
         photo: swiftDzire,
         title: "Swift Dzire",
         location: "Dehradun",
         price: 3500,
         fuelType: "Petrol",
         seats: 4,
         speed: "80 km/h"
       },
       {
         _id: "2",
         photo: HyundaiI20,
         title: "Hyundai i20",
         location: "Dehradun",
         price: 3000,
         fuelType: "Petrol",
         seats: 4,
         speed: "100 km/h"
       },
       {
         _id: "3",
         photo: HyundaiVenue,
         title: "Hyundai Venue",
         location: "Dehradun",
         price: 3500,
         fuelType: "Petrol",
         seats: 4,
         speed: "100 km/h"
       },
       {
         _id: "4",
         photo: MarutiBrezza,
         title: "Maruti Brezza",
         location: "Dehradun",
         price: 3200,
         fuelType: "Petrol",
         seats: 4,
         speed: "100 km/h"
       },
       {
         _id: "5",
         photo: toyotaInnovaCrysta,
         title: "Toyota Innova Crysta",
         location: "Dehradun",
         price: 6000,
         fuelType: "Diesel",
         seats: 6,
         speed: "100 km/h"
       },
       {
         _id: "6",
         photo: marutiErtiga,
         title: "Maruti Ertiga",
         location: "Dehradun",
         price: 4500,
         fuelType: "Petrol",
         seats: 6,
         speed: "100 km/h"
       }
    ];

   return (
      <div className="py-20">
         <div className="flex items-center justify-between">
            <div className="space-y-3">
               <h2 className="text-4xl font-semibold">Best Car Rental & Taxi Service Company</h2>
               <p className="text-gray-600">We are the no.1 taxi & car rental service provider in Dehradun.</p>
            </div>
            <Link to='/cars' className="bg-black text-white flex items-center space-x-3 py-2 px-6 rounded-md">
               <span className="font-semibold">View More</span>
               <IoIosArrowRoundForward className="text-3xl" />
            </Link>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {
               cars.map((car, i) => <Card key={i} car={car} />)
            }

         </div>

      </div>
   );
};

export default Cars;