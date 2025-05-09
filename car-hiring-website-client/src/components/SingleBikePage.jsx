import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";
import { MdOutlineLocalGasStation, MdSpeed } from "react-icons/md";
import { PiEngineLight } from "react-icons/pi";
import { FaHelmetSafety } from "react-icons/fa6";

import HondaActiva6G from "../assets/bikes/HondaActiva6G.webp"
import TVSJupiter from "../assets/bikes/TVSJupiter.webp"
import TVSNtorq125 from "../assets/bikes/TVSNtorq125.webp"
import SuzukiAccess125 from "../assets/bikes/SuzukiAccess125.avif"
import YamahaRayZR from "../assets/bikes/YamahaRayZR.webp"
import HeroMaestroEdge from "../assets/bikes/HeroMaestroEdge.png"
import ApriliaSR125 from "../assets/bikes/ApriliaSR125.png"
import HondaDio from "../assets/bikes/HondaDio.webp"
import VespaLX125 from "../assets/bikes/VespaLX125.avif"

const bikeList = [
  {
    _id: "1",
    id: "1",
    photo: HondaActiva6G,
    title: "Honda Activa 6G",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "RSK-ACT6G",
    speed: "85 km/h",
    fuelType: "Petrol",
    engine: "109.51cc",
    helmets: 2,
    price: 500,
    fuel: "Included"
  },
  {
    _id: "2",
    id: "2",
    photo: TVSJupiter,
    title: "TVS Jupiter",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "MUS-JUP",
    speed: "80 km/h",
    fuelType: "Petrol",
    engine: "109.7cc",
    helmets: 2,
    price: 450,
    fuel: "Included"
  },
  {
    _id: "3",
    id: "3",
    photo: TVSNtorq125,
    title: "TVS Ntorq 125",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "NNT-NTQ125",
    speed: "95 km/h",
    fuelType: "Petrol",
    engine: "124.8cc",
    helmets: 2,
    price: 600,
    fuel: "Included"
  },
  {
    _id: "4",
    id: "4",
    photo: SuzukiAccess125,
    title: "Suzuki Access 125",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "DDN-ACS125",
    speed: "90 km/h",
    fuelType: "Petrol",
    engine: "124cc",
    helmets: 2,
    price: 550,
    fuel: "Included"
  },
  {
    _id: "5",
    id: "5",
    photo: YamahaRayZR,
    title: "Yamaha Ray ZR",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "HRW-RZR",
    speed: "92 km/h",
    fuelType: "Petrol",
    engine: "125cc",
    helmets: 2,
    price: 580,
    fuel: "Included"
  },
  {
    _id: "6",
    id: "6",
    photo: HeroMaestroEdge,
    title: "Hero Maestro Edge",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "DLI-ME",
    speed: "85 km/h",
    fuelType: "Petrol",
    engine: "110.9cc",
    helmets: 2,
    price: 520,
    fuel: "Included"
  },
  {
    _id: "7",
    id: "7",
    photo: ApriliaSR125,
    title: "Aprilia SR 125",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "GOA-SR125",
    speed: "100 km/h",
    fuelType: "Petrol",
    engine: "124.7cc",
    helmets: 2,
    price: 700,
    fuel: "Included"
  },
  {
    _id: "8",
    id: "8",
    photo: HondaDio,
    title: "Honda Dio",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "KSP-DIO",
    speed: "88 km/h",
    fuelType: "Petrol",
    engine: "109.51cc",
    helmets: 2,
    price: 500,
    fuel: "Included"
  },
  {
    _id: "9",
    id: "9",
    photo: VespaLX125,
    title: "Vespa LX 125",
    location: "Dehradun",
    locationURL: "https://maps.google.com?q=Dehradun",
    tourCode: "RKE-LX125",
    speed: "95 km/h",
    fuelType: "Petrol",
    engine: "124.45cc",
    helmets: 2,
    price: 750,
    fuel: "Included"
  }
];

const BikeDetails = () => {
  const { id } = useParams();
  const bike = bikeList.find(bike => bike.id === id);
  const [show, setShow] = useState(false);

  if (!bike) return <p className="text-center text-red-500">Bike not found</p>;

  const { photo, title, location, locationURL, tourCode, speed, fuelType, engine, helmets, price, fuel } = bike;

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
        </div>
      </div>

      {/* Details */}
      <div className="flex gap-6 mt-10">
        <div className="basis-[65%] space-y-6">
          <div className="p-10 grid grid-cols-3 gap-6 border shadow rounded-xl">
            <div className="p-4 border flex items-center justify-center space-x-2 bg-green-50 text-xl">
              <MdSpeed />
              <span>{speed}</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-green-50 text-xl">
              <MdOutlineLocalGasStation />
              <span>{fuelType}</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-green-50 text-xl">
              <PiEngineLight />
              <span>{engine}</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-green-50 text-xl">
              <FaHelmetSafety />
              <span>{helmets} Helmet(s)</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-green-50 text-xl">
              <span>Manual</span>
            </div>
            <div className="p-4 border flex items-center justify-center space-x-2 bg-green-50 text-xl">
              <span>{fuel}L Tank</span>
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
                  Rent the {title} for smooth riding across city streets or adventurous trails. Known for its {engine} power and high fuel efficiency.
                </p>
                <p className="text-[15px] font-light">
                  Includes {helmets} helmet(s), full tank fuel, and top condition. Perfect for solo or duo rides.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-[33%]">
          <div className="border rounded-xl">
            <h3 className="bg-gray-100 py-6 px-4 font-semibold text-2xl rounded-t-xl">Booking Details</h3>
            <div className="px-4 py-6 space-y-4">
              <p className="font-semibold">Max Riders: {helmets}</p>
              <p className="text-lg font-semibold">Price per Day: <span className="text-blue-600">₹{price}</span></p>
              <hr />
              <p className="text-lg font-semibold">Total Price: <span className="text-green-600">₹{price}</span></p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
