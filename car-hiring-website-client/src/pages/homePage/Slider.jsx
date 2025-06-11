import { useState, useEffect } from "react";
import Mussoorie from "../../assets/taxi/mussoorie.avif"
import CharDham from "../../assets/taxi/chardham.jpg"
import Rishikesh from "../../assets/taxi/rishikesh.jpeg"
import Haridwar from "../../assets/taxi/haridwar3.webp"
import Nanital from "../../assets/taxi/nainital.jpg"

const packages = [
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

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < packages.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first package
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(packages.length - 4); // Loop to the last set of packages
    }
  };

  const visiblePackages = packages.slice(currentIndex, currentIndex + 4);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(goNext, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <section className="my-10 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-6">Popular Packages</h2>

      <div className="relative">
        <div className="flex space-x-6 overflow-hidden p-4">
          {visiblePackages.map(pkg => (
            <div key={pkg.id} className="w-1/4 bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition relative">
              <img src={pkg.image} alt={pkg.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-2">Destination: {pkg.destination}</p>
                <p className="text-blue-600 font-bold mb-4">₹{pkg.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next and Previous Buttons */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full z-10"
        >
          &#10094;
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full z-10"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Slider;
