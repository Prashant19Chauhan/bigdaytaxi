import { useState } from "react";
import Mussoorie from "../../assets/taxi/mussoorie.avif"
import CharDham from "../../assets/taxi/chardham.jpg"
import Rishikesh from "../../assets/taxi/rishikesh.jpeg"
import Haridwar from "../../assets/taxi/haridwar3.webp"
import Nanital from "../../assets/taxi/nainital.jpg"

const allPackages = [
  {
    id: 1,
    title: "Dehradun to Mussoorie Package",
    destination: "Mussoorie",
    price: 2500,
    image: Mussoorie,
    duration: "1N/2D",
  },
  {
    id: 2,
    title: "Char Dham Yatra Package",
    destination: "Char Dham",
    price: 20000,
    image: CharDham,
    duration: "9N/10D",
  },
  {
    id: 3,
    title: "Rishikesh Adventure Tour",
    destination: "Rishikesh",
    price: 3500,
    image: Rishikesh,
    duration: "2N/3D",
  },
  {
    id: 4,
    title: "Nainital Weekend Package",
    destination: "Nainital",
    price: 4500,
    image: Nanital,
    duration: "2N/3D",
  },
  {
    id: 5,
    title: "Haridwar Pilgrimage Tour",
    destination: "Haridwar",
    price: 3000,
    image: Haridwar,
    duration: "1N/2D",
  },
];

const uniqueDestinations = [...new Set(allPackages.map(p => p.destination))];

const priceRanges = [
  { label: "Below ₹3,000", min: 0, max: 2999 },
  { label: "₹3,000 - ₹5,000", min: 3000, max: 5000 },
  { label: "Above ₹5,000", min: 5001, max: Infinity },
];

const Packages = () => {
  const [selectedDest, setSelectedDest] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleDestFilter = (destination) => {
    setSelectedDest(prev =>
      prev.includes(destination)
        ? prev.filter(d => d !== destination)
        : [...prev, destination]
    );
  };

  const applyFilters = () => {
    return allPackages.filter(pkg => {
      const destMatch = selectedDest.length === 0 || selectedDest.includes(pkg.destination);
      const priceMatch =
        !selectedPriceRange ||
        (pkg.price >= selectedPriceRange.min && pkg.price <= selectedPriceRange.max);
      return destMatch && priceMatch;
    });
  };

  const filteredPackages = applyFilters();

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-12 py-10 gap-6 bg-gray-100 min-h-screen">
      
      {/* Sidebar Filters */}
      <aside
        className={`w-full md:w-1/4 bg-white shadow-md rounded-xl p-6 space-y-6 ${isSidebarVisible ? 'block' : 'hidden md:block'}`}
      >
        <div>
          <h3 className="font-semibold text-lg mb-2">Destination</h3>
          {uniqueDestinations.map(dest => (
            <div key={dest} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id={dest}
                checked={selectedDest.includes(dest)}
                onChange={() => toggleDestFilter(dest)}
              />
              <label htmlFor={dest}>{dest}</label>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Price Range</h3>
          {priceRanges.map(range => (
            <div key={range.label} className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="price"
                id={range.label}
                checked={selectedPriceRange?.label === range.label}
                onChange={() => setSelectedPriceRange(range)}
              />
              <label htmlFor={range.label}>{range.label}</label>
            </div>
          ))}
          <button
            onClick={() => setSelectedPriceRange(null)}
            className="text-blue-600 text-sm mt-2 underline"
          >
            Clear Price Filter
          </button>
        </div>
      </aside>

      {/* Mobile Filter Button */}
      <button
        className="md:hidden bg-blue-600 text-white px-4 py-2 rounded top-16 right-4 z-10"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Packages Display */}
      <main className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold mb-4">Available Packages</h2>

        {filteredPackages.length === 0 ? (
          <p className="text-gray-600">No packages match the selected filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map(pkg => (
              <div
                key={pkg.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition relative"
              >
                {/* Image and Duration Tag */}
                <div className="relative h-48 w-full">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
                    {pkg.duration}
                  </span>
                </div>

                {/* Package Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-2">Destination: {pkg.destination}</p>
                  <p className="text-blue-600 font-bold mb-4">₹{pkg.price}</p>
                  <div className="flex gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                      Book Now
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Packages;
