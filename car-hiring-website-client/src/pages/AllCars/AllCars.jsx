import { useState } from "react";
import Card from "../../components/Card";
import swiftDzire from "../../assets/cars/Swift-Dzire.avif"
import hyundaiCreta from "../../assets/cars/hyundaiCreta.jpg"
import toyotaInnovaCrysta from "../../assets/cars/toyotaInnovaCrysta.png"
import marutiErtiga from "../../assets/cars/marutiErtiga.png"
import HyundaiI20 from "../../assets/cars/HyundaiI20.jpg"
import MarutiSwiftDzire from "../../assets/cars/MarutiSwiftDzire.avif"
import HyundaiVenue from "../../assets/cars/HyundaiVenue.avif"
import MarutiBrezza from "../../assets/cars/MarutiBrezza.avif"
import MarutiSwift from "../../assets/cars/MarutiSwift.avif"

// Sample car data (20 cars)
const allCars = [
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
  },
  {
    _id: "7",
    photo: hyundaiCreta,
    title: "Hyundai Creta",
    location: "Dehradun",
    price: 4000,
    fuelType: "Diesel",
    seats: 4,
    speed: "100 km/h"
  },
  {
    _id: "8",
    photo: MarutiSwift,
    title: "Maruti Swift",
    location: "Dehradun",
    price: 2700,
    fuelType: "Petrol",
    seats: 4,
    speed: "80 km/h"
  },
  {
    _id: "9",
    photo: MarutiSwiftDzire,
    title: "Maruti Swift Dzire",
    location: "Dehradun",
    price: 3000,
    fuelType: "Petrol",
    seats: 4,
    speed: "80 km/h"
  }
];

const AllCars = () => {
  const [visibleCars, setVisibleCars] = useState(6);

  const handleLoadMore = () => {
    setVisibleCars(prev => prev + 6);
  };

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          allCars.slice(0, visibleCars).map(car => <Card key={car._id} car={car} />)
        }
      </div>
      {visibleCars < allCars.length && (
        <div className="text-center mt-8">
          <button onClick={handleLoadMore} className="btn">See More</button>
        </div>
      )}
    </div>
  );
};

export default AllCars;
