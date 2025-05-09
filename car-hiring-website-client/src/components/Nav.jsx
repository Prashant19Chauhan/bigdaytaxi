import { Link, NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import logo from '../assets/bigdaytaxi.png'
import { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";


const Nav = () => {
    

    const [scrollPosition, setScrollPosition] = useState(0)
    const [showNav, setShowNav] = useState(true)
    const [menu, setMenu] = useState(false)
   

    

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos < scrollPosition) {
                setShowNav(true)
            }
            else {
                setShowNav(false)
            }
            setScrollPosition(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPosition])


    return (
        <nav className={`fixed top-0 left-0 right-0  shadow-sm z-50 bg-purple-100/80 backdrop-blur-3xl transition-transform duration-500 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='flex items-center justify-between py-4 max-w-7xl mx-auto px-3'>
                <Link to='/'>
                    <img src={logo} alt="" className='w-[90px]' />
                </Link>
                <ul className='font-semibold text-gray-600 space-x-6 nav items-center hidden md:flex'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/cars'>Cars</NavLink>
                    <NavLink to='/bike-rental'>Bike Rental</NavLink>
                    <NavLink to='/taxi-service'>Taxi Services</NavLink>
                    <NavLink to='/holiday-packages'>Holiday Packages</NavLink>
                </ul>

                <div className='flex items-center space-x-4'>
                    <div onClick={() => setMenu(true)} className='text-2xl md:hidden cursor-pointer'>
                        <CiMenuBurger className='' />
                    </div>
                </div>

                {/* side menu */}

                <ul className={`font-semibold text-gray-600 nav  absolute flex flex-col items-start bg-white w-[250px] h-screen top-0 right-0 py-5 pl-10 pr-2 space-y-5 md:hidden duration-500  ${menu ? 'mr-0' : '-mr-72'}`}>
                    <div className='w-full flex items-center justify-end'>
                        <IoCloseOutline
                        onClick={() => setMenu(false)} className='text-3xl cursor-pointer' />
                    </div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/cars'>Cars</NavLink>
                    <NavLink to='/bike-rental'>Bike Rental</NavLink>
                    <NavLink to='/taxi-service'>Taxi Services</NavLink>
                    <NavLink to='/holiday-packages'>Holiday Packages</NavLink>
                </ul>

            </div>
        </nav>
    );
};

export default Nav;