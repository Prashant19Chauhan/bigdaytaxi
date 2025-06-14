import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import logo from '../assets/bigdaytaxi.png'

const Footer = () => {

   return (
      <footer className="rounded-xl w-full px-3 max-w-7xl mx-auto">
         <div
            className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full">
            <div className="w-full sm:w-[25%] ">
               <img src={logo} alt="logo"
                  className="w-14 mb-3" />
               <div className="flex flex-col gap-[20px] text-primary">
                  <span><a
                     className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer">
                     <IoLocationOutline className="text-[1.2rem]" />
                     Turner Road C-20, Clement Town, Subhash nagar, Dehradun, Uttrakhand.
                  </a></span>
                  <span><a
                     className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                     <MdOutlineEmail className="text-[1.1rem]" />
                     o.shotravels@gmail.com
                  </a></span>
                  <span><a
                     className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                     <MdOutlineLocalPhone className="text-[1.1rem]" />
                     +91-8881815984
                  </a></span>
               </div>
            </div>

            <div className="">
               <h3 className="text-[1.2rem] font-semibold text-text mb-2">Services</h3>
               <div className="flex text-black flex-col gap-[10px]">
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Taxi Service</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Car Rental Service</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Tour Packages</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Bike Rental</p>
               </div>
            </div>


            <div className="">
               <h3 className="text-[1.2rem] font-semibold text-text mb-2">Company</h3>
               <div className="flex text-black flex-col gap-[10px]">
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Service</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Features</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Our
                     Team</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Portfolio</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Blog</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Contact
                     Us</p>
               </div>
            </div>


            <div className="">
               <h3 className="text-[1.2rem] font-semibold text-text mb-2">Our Social Media</h3>
               <div className="flex text-black flex-col gap-[10px]">
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Dribbble</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Behance</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Medium</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Instagram</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Facebook</p>
                  <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Twitter</p>
               </div>
            </div>
         </div>
         <p className="text-[12px] text-center py-4">All Right Reserved - Big Day Taxi</p>
      </footer>
   );
};

export default Footer;
