import { useState } from "react";
import BikeCard from "../../components/Bikecard";
import HondaActiva6G from "../../assets/bikes/HondaActiva6G.webp"
import TVSJupiter from "../../assets/bikes/TVSJupiter.webp"
import TVSNtorq125 from "../../assets/bikes/TVSNtorq125.webp"
import SuzukiAccess125 from "../../assets/bikes/SuzukiAccess125.avif"
import YamahaRayZR from "../../assets/bikes/YamahaRayZR.webp"
import HeroMaestroEdge from "../../assets/bikes/HeroMaestroEdge.png"
import ApriliaSR125 from "../../assets/bikes/ApriliaSR125.png"
import HondaDio from "../../assets/bikes/HondaDio.webp"
import VespaLX125 from "../../assets/bikes/VespaLX125.avif"

const allBikes = [
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
    },
    {
      _id: "7",
      photo: ApriliaSR125,
      title: "Aprilia SR 125",
      location: "Dehradun",
      price: 700,
      fuelType: "Petrol",
      seats: 2,
      speed: "100 km/h"
    },
    {
      _id: "8",
      photo: HondaDio,
      title: "Honda Dio",
      location: "Dehradun",
      price: 500,
      fuelType: "Petrol",
      seats: 2,
      speed: "88 km/h"
    },
    {
      _id: "9",
      photo: VespaLX125,
      title: "Vespa LX 125",
      location: "Dehradun",
      price: 750,
      fuelType: "Petrol",
      seats: 2,
      speed: "95 km/h"
    }
];


const BikeRental = () => {

   const [visibleBikes, setVisibleBikes] = useState(6);

  const handleLoadMore = () => {
    setVisibleBikes(prev => prev + 6);
  };

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          allBikes.slice(0, visibleBikes).map(bike => <BikeCard key={bike._id} bike={bike} />)
        }
      </div>
      {visibleBikes < allBikes.length && (
        <div className="text-center mt-8">
          <button onClick={handleLoadMore} className="btn">See More</button>
        </div>
      )}
    </div>
  );
};

export default BikeRental;