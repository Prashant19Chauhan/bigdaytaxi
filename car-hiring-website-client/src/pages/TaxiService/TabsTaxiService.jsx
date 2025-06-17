import { useState } from "react";
import { FaCity, FaMapMarkedAlt, FaPlaneDeparture, FaBoxOpen, FaCheckCircle } from "react-icons/fa";
import Haridwar from "../../assets/taxi/haridwar3.webp"
import Dehradun from "../../assets/taxi/dehradun2.jpg"
import Rishikesh from "../../assets/taxi/rishikesh.jpeg"
import Mussoorie from "../../assets/taxi/mussoorie.avif"
import Delhi from "../../assets/taxi/delhi.webp"
import Delhi1 from "../../assets/taxi/delhi.jpeg"
import CharDham from "../../assets/taxi/chardham.jpg"
import Kedarnath from "../../assets/taxi/kedarnath.jpg"
import Badrinath from "../../assets/taxi/badrinath-temple.jpg"
import Auli from "../../assets/taxi/Auli-5.webp"
import Chopta from "../../assets/taxi/chopta.jpg"
import BadriKedar from "../../assets/taxi/kedarnath1.jpg"


const taxiData = {
  local: [
    {
      id:1,
      title: "Dehradun Local Taxi Service",
      description: "Affordable local taxi rides across Dehradun with expert drivers for city tours, office commutes, and shopping.",
      image: Dehradun,
    },
    {
      title: "Rishikesh Local Taxi Service",
      description: "Quick and comfortable taxi rides in Rishikesh, perfect for local sightseeing and daily travel.",
      image: Rishikesh,
    },
    {
      title: "Haridwar Local Taxi Service",
      description: "Reliable local taxi options in Haridwar for temple visits, markets, and short trips within the city.",
      image: Haridwar,
    },
    {
      title: "Mussoorie Local Taxi Service",
      description: "Explore Mussoorie comfortably with our local cabs. Ideal for sightseeing and mall road visits.",
      image: Mussoorie,
    },
  ],
  outstation: [
    {
      title: "Dehradun to Delhi Taxi",
      description: "Seamless travel from Dehradun to Delhi in well-maintained AC taxis with experienced drivers.",
      image: Delhi,
    },
    {
      title: "Dehradun to Chandigarh Taxi",
      description: "Comfortable Dehradun to Chandigarh taxi service for business or leisure trips.",
      image: "https://source.unsplash.com/featured/?chandigarh,road",
    },
    {
      title: "Haridwar to Delhi Taxi",
      description: "Smooth and affordable Haridwar to Delhi outstation cab rides with professional drivers.",
      image: Delhi1,
    },
    {
      title: "Haridwar to Chandigarh Taxi",
      description: "Convenient Haridwar to Chandigarh cab service with pickup from any location in the city.",
      image: "https://source.unsplash.com/featured/?chandigarh,travel",
    },
    {
      title: "Dehradun to Rishikesh Taxi",
      description: "Quick and affordable Dehradun to Rishikesh rides for leisure or pilgrimage travel.",
      image: Rishikesh,
    },
    {
      title: "Dehradun to Haridwar Taxi",
      description: "Comfortable and timely Dehradun to Haridwar taxi service for any travel need.",
      image: Haridwar,
    },
    {
      title: "Rishikesh to Delhi Taxi",
      description: "Smooth ride from Rishikesh to Delhi in spacious, clean, and AC cabs.",
      image: "https://source.unsplash.com/featured/?roadtrip,delhi",
    },
    {
      title: "Rishikesh to Chandigarh Taxi",
      description: "Affordable and comfortable Rishikesh to Chandigarh taxi for long-distance travel.",
      image: "https://source.unsplash.com/featured/?longdrive,car",
    },
    {
      title: "Dehradun to Noida Taxi",
      description: "Book a reliable Dehradun to Noida cab with luggage space and expert drivers.",
      image: "https://source.unsplash.com/featured/?noida,car",
    },
    {
      title: "Haridwar to Noida Taxi",
      description: "Travel safely from Haridwar to Noida with our sanitized outstation cabs.",
      image: "https://source.unsplash.com/featured/?haridwar,noida",
    },
    {
      title: "Rishikesh to Noida Taxi",
      description: "Quick and convenient Rishikesh to Noida taxi service with pickup at your doorstep.",
      image: "https://source.unsplash.com/featured/?rishikesh,noida",
    }
  ],
  airport: [
    {
      title: "Jolly Grant Airport Taxi (Dehradun)",
      description: "Timely airport taxi service to/from Jolly Grant Airport, Dehradun. Comfortable rides guaranteed.",
      image: "https://source.unsplash.com/featured/?airport,dehradun",
    },
    {
      title: "Delhi Airport Taxi Service",
      description: "On-time airport pickups and drops to/from Delhi IGI Airport for all Uttarakhand cities.",
      image: "https://source.unsplash.com/featured/?taxi,airport",
    },
  ],
  packages: [
    {
      title: "Char Dham Yatra Package",
      description: "Spiritual journey to Yamunotri, Gangotri, Kedarnath, and Badrinath with premium cabs.",
      image: CharDham,
    },
    {
      title: "Kedarnath Tour Package",
      description: "Book a dedicated taxi for a soulful trip to Kedarnath, including nearby sightseeing.",
      image: Kedarnath,
    },
    {
      title: "Badrinath Tour Package",
      description: "Comfortable taxi package for Badrinath temple visits with flexible itinerary.",
      image: Badrinath,
    },
    {
      title: "Auli Tour Package",
      description: "2-day ski trip to Auli from Dehradun or Rishikesh with hill-certified cab drivers.",
      image: Auli,
    },
    {
      title: "Chopta Tour Package",
      description: "Chopta and Tungnath taxi package for trekking and nature lovers.",
      image: Chopta,
    },
    {
      title: "Mussoorie Sightseeing Tour",
      description: "Explore Kempty Falls, Mall Road, and Dhanaulti in a 1-day Mussoorie taxi tour.",
      image: Mussoorie,
    },
    {
      title: "Rishikesh Tour Package",
      description: "Rishikesh tour with Ram Jhula, Laxman Jhula, rafting, and more in an all-included taxi package.",
      image: Rishikesh,
    },
    {
      title: "Haridwar Tour Package",
      description: "Haridwar Ganga Aarti, temples, and local attractions with a comfortable taxi package.",
      image: Haridwar,
    },
    {
      title: "Dehradun Tour Package",
      description: "Taxi package for Robber’s Cave, Sahastradhara, Tapkeshwar, and more in Dehradun.",
      image: Dehradun,
    },
    {
      title: "Kedarnath-Badrinath Tour Package",
      description: "2-dham spiritual trip with professional drivers and a well-managed taxi package.",
      image: BadriKedar,
    },
  ]
};

const tabIcons = {
  local: <FaCity className="inline mr-2" />,
  outstation: <FaMapMarkedAlt className="inline mr-2" />,
  airport: <FaPlaneDeparture className="inline mr-2" />,
  packages: <FaBoxOpen className="inline mr-2" />,
};

const clickHandler = (e)  => {
  console.log(e.target.id)
}
const TabsTaxiService = () => {
  const [activeTab, setActiveTab] = useState("local");

  const renderCards = (category) => {
    return taxiData[category].map((item, index) => (
      <div
        key={index}
        id={item.id}
        className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300 overflow-hidden"
      >
        <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              AC & Non-AC options available
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Experienced local drivers
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              24/7 service availability
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50" onClick={clickHandler}>View Details</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="py-10 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Taxi Services We Offer</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(taxiData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-50"
            }`}
          >
            {tabIcons[tab]}
            {tab === "local" && "Local Taxi Service"}
            {tab === "outstation" && "Outstation Taxi Service"}
            {tab === "airport" && "Airport Taxi Service"}
            {tab === "packages" && "Taxi Packages"}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {renderCards(activeTab)}
      </div>
    </div>
  );
};

export default TabsTaxiService;
