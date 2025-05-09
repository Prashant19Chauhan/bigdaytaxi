import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiSeatLight } from "react-icons/pi";
import { GiEternalLove, GiMoebiusTrefoil } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { MdOutlineLocalGasStation, MdSpeed } from "react-icons/md";
import car1 from "../assets/cars/car1.jpg"
import swiftDzire from "../assets/cars/Swift-Dzire.avif"
import hyundaiCreta from "../assets/cars/hyundaiCreta.jpg"
import toyotaInnovaCrysta from "../assets/cars/toyotaInnovaCrysta.png"
import marutiErtiga from "../assets/cars/marutiErtiga.png"
import HyundaiI20 from "../assets/cars/HyundaiI20.jpg"
import MarutiSwiftDzire from "../assets/cars/MarutiSwiftDzire.avif"
import HyundaiVenue from "../assets/cars/HyundaiVenue.avif"
import MarutiBrezza from "../assets/cars/MarutiBrezza.avif"
import MarutiSwift from "../assets/cars/MarutiSwift.avif"

const carList = [
  {
    id: "1",
    photo: swiftDzire,
    title: "Swift Dzire",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "SwiftDzire25",
    speed: "80 km/h",
    fuelType: "Petrol",
    seats: 4,
    doors: 4,
    price: 3500,
    fuel: 40
  },
  {
    id: "2",
    photo: HyundaiI20,
    title: "Hyundai i20",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "I2025",
    speed: "80 km/h",
    fuelType: "Petrol",
    seats: 4,
    doors: 4,
    price: 3000,
    fuel: 35
  },
  {
    id: "3",
    photo: HyundaiVenue,
    title: "Hyundai Venue",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "Venue25",
    speed: "80 km/h",
    fuelType: "Petrol",
    seats: 4,
    doors: 4,
    price: 3500,
    fuel: 40
  },
  {
    id: "4",
    photo: MarutiBrezza,
    title: "Maruti Brezza",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "Brezza25",
    speed: "80 km/h",
    fuelType: "Petrol",
    seats: 4,
    doors: 4,
    price: 3200,
    fuel: 30
  },
  {
    id: "5",
    photo: toyotaInnovaCrysta,
    title: "Toyota Innova Crysta",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "Crysta25",
    speed: "80 km/h",
    fuelType: "Diesel",
    seats: 6,
    doors: 4,
    price: 6000,
    fuel: 50
  },
  {
    id: "6",
    photo: marutiErtiga,
    title: "Maruti Ertiga",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "ERTIGA24",
    speed: "80 km/h",
    fuelType: "Petrol",
    seats: 6,
    doors: 5,
    price: 4500,
    fuel: 50
  },
  {
    id: "7",
    photo: hyundaiCreta,
    title: "Hyundai Creta",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "ERTIGA24",
    speed: "80 km/h",
    fuelType: "Diesel",
    seats: 4,
    doors: 4,
    price: 4000,
    fuel: 50
  },
  {
    id: "8",
    photo: MarutiSwift,
    title: "Maruti Swift",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "Swift24",
    speed: "80 km/h",
    fuelType: "Petrol",
    seats: 4,
    doors: 4,
    price: 2700,
    fuel: 50
  },
  {
    id: "9",
    photo: MarutiSwiftDzire,
    title: "Maruti Swift Dzire",
    location: "Dehradun",
    locationURL: "https://maps.google.com",
    tourCode: "Dzire24",
    speed: "80 km/h",
    fuelType: "Petrol",
    seats: 4,
    doors: 4,
    price: 3000,
    fuel: 50
  }
];

const CardDetails = () => {
  const { id } = useParams();
  const car = carList.find(car => car.id === id);
  const [show, setShow] = useState(false);

  if (!car) return <p className="text-center text-red-500">Car not found</p>;

  const { photo, title, location, locationURL, tourCode, speed, fuelType, seats, doors, price, fuel } = car;

  return (
    <div>
      <img src={photo} alt={title} className="w-full max-h-[65vh] object-cover rounded-xl mt-2" />
      <h1 className="text-3xl sm:text-4xl font-semibold py-6">{title}</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6 sm:space-x-10">
          <div className="flex items-center space-x-2 text-gray-600">
            <CiLocationOn />
            <span>{location}</span>
          </div>
          <Link to={locationURL} target="_blank" className="underline font-semibold">Show on map</Link>
          <div className="flex items-center space-x-2 text-gray-600">
            <LuBookMinus />
            <span>Tour Code: <span className="font-semibold text-black underline">{tourCode}</span></span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 p-2 px-4 border rounded-full hover:bg-gray-100 cursor-pointer">
            <IoShareSocialOutline />
            <p>Share</p>
          </div>
          <div className="flex items-center space-x-1 p-2 px-4 border rounded-full hover:bg-gray-100 cursor-pointer">
            <GiEternalLove />
            <p>Wishlist</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex gap-6 mt-10">
        <div className="basis-[65%] space-y-6">
          <div className="p-10 grid grid-cols-3 gap-6 border shadow rounded-xl">
            <div className="p-4 border flex items-center justify-center space-x-2 bg-yellow-50 text-xl">
              <MdSpeed />
              <span>{speed}</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-yellow-50 text-xl">
              <MdOutlineLocalGasStation />
              <span>{fuelType}</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-yellow-50 text-xl">
              <span>Automatic</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-yellow-50 text-xl">
              <PiSeatLight />
              <span>{seats} Seats</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-yellow-50 text-xl">
              <LiaDoorOpenSolid />
              <span>{doors} Doors</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-yellow-50 text-xl">
              <GiMoebiusTrefoil />
              <span>{fuel}L</span>
            </div>
          </div>

          <div className="border shadow p-10 rounded-xl">
            <div className="space-y-5">
              <div onClick={() => setShow(!show)} className="flex items-center justify-between cursor-pointer">
                <h2 className="text-xl font-bold">Overview</h2>
                <IoIosArrowDown className={`text-xl transform duration-500 ${show ? 'rotate-180' : ''}`} />
              </div>
              <div className={`text-justify space-y-4 overflow-hidden transition-all duration-700 ${show ? 'max-h-0' : 'max-h-screen'}`}>
                <p className="text-[15px] font-light">
                  This {title} is the perfect blend of comfort and power, suited for both urban and adventure travel. Explore your destination with confidence and style.
                </p>
                <p className="text-[15px] font-light">
                  Fully maintained and ready to go, with comfortable seating for {seats} and a fuel-efficient {fuelType} engine.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-[33%]">
          <div className="border rounded-xl">
            <h3 className="bg-gray-100 py-6 px-4 font-semibold text-2xl rounded-t-xl">Booking Details</h3>
            <div className="px-4 py-6 space-y-4">
              <p className="font-semibold">Max Guests: {seats - 1}</p>
              <p className="text-lg font-semibold">Price per Day: <span className="text-blue-600">₹{price}</span></p>
              <hr />
              <p className="text-lg font-semibold">Total Price: <span className="text-green-600">₹{price}</span></p>
              <p className="text-sm text-red-600 bg-red-50 p-2.5 rounded-sm text-center">
                Please <Link to="/login" className="hover:underline">login</Link> or <Link to="/register" className="hover:underline">register</Link> to book this car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
