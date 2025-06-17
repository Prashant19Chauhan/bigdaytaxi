import { useState, useEffect } from 'react';
import { FaUserAlt, FaPhoneAlt, FaMapMarkerAlt, FaCarAlt } from 'react-icons/fa';
import banner1 from '../../assets/homebg1.webp';
import banner2 from '../../assets/homebg2.jpg';
import banner3 from '../../assets/homebg3.jpeg';
import banner4 from '../../assets/homebg4.jpg';
import icon from '../../assets/icon.svg';

const Banner = () => {
    const images = [banner1, banner2, banner3, banner4];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="w-full h-[100vh] bg-cover bg-center transition-all duration-1000 flex items-center justify-center"
            style={{
                backgroundImage: `url(${images[currentImage]})`,
            }}
        >
            <div className="bg-black/60 w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 gap-8">
                {/* LEFT: Hero Text */}
                <div className="text-white lg:w-1/2 space-y-6 text-center lg:text-left">
                    <div className="bg-yellow-100/80 w-fit mx-auto lg:mx-0 border border-yellow-300 py-2 px-6 rounded-full flex items-center gap-2">
                        <img src={icon} alt="icon" className="w-8" />
                        <h3 className="font-serif font-light text-yellow-800 italic">Explore The World</h3>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif leading-tight drop-shadow-lg">
                        The Best Place To Rent A Car For Your Journey
                    </h1>
                    <p className="text-lg font-light text-gray-200 drop-shadow-sm">
                        Enjoy your journey with your family and pay us for it.
                    </p>
                </div>

                {/* RIGHT: Booking Form */}
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl w-full max-w-md lg:w-[400px] space-y-4">
                    <h2 className="text-2xl font-bold text-yellow-600 text-center mb-2">Book a Taxi Now</h2>
                    <form className="space-y-4">
                        <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                            <FaUserAlt className="text-yellow-600 mr-2" />
                            <input type="text" placeholder="Your Name" className="w-full outline-none bg-transparent" />
                        </div>
                        <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                            <FaPhoneAlt className="text-yellow-600 mr-2" />
                            <input type="tel" placeholder="Phone Number" className="w-full outline-none bg-transparent" />
                        </div>
                        <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                            <FaMapMarkerAlt className="text-yellow-600 mr-2" />
                            <input type="text" placeholder="Pickup Location" className="w-full outline-none bg-transparent" />
                        </div>
                        <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                            <FaCarAlt className="text-yellow-600 mr-2" />
                            <input type="text" placeholder="Car Type (Optional)" className="w-full outline-none bg-transparent" />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded font-semibold transition"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;
