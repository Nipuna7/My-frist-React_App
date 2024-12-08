import React, { useState } from 'react'
import { PiApplePodcastsLogoFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
// import { FaBars } from "react-icons/fa";

//import link from react scrollbars
import { Link } from 'react-scroll'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ]



    return (
        <>
            <nav className='fixed top-0 left-0 right-0 p-4 mx-auto bg-white border-b md:px-14 max-w-screen-2xl text-primary'>
                <div className='container flex justify-between mx-auto text-lg font-medium item-center'>
                    <div className='flex items-center space-x-14'>
                        <a href='/' className='flex items-center space-x-3 text-2xl font-semibold text-primary'>
                            <PiApplePodcastsLogoFill className='items-center inline-block w-10' />
                            <span>XYZ</span></a>

                        {/* showing nav item using map */}
                        <ul className='hidden space-x-12 md:flex'>
                            {
                                navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path}
                                    className='block cursor-pointer hover:text-gray-300'>{link}</Link>)
                            }
                        </ul>
                    </div>

                    {/* language and signup */}
                    <div className='items-center hidden space-x-12 md:flex'>
                        <a href="/" className='items-center hidden lg:flex hover:text-secondary'>
                            <GrLanguage className='mr-2' /><span>Language</span></a>
                        <button className='px-4 py-2 transition-all duration-300 rounded bg-secondary hover:text-white hover:bg-indigo-600'>Sign up</button>
                    </div>

                    {/* menu-btn.only display on mobile */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)
                            }
                        </button>
                    </div>

                </div>
            </nav>

            {/* // navitem for mobile devices */}

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path}
                        className='block text-white cursor-pointer hover:text-gray-300' onClick={toggleMenu}>{link}</Link>)
                }
            </div>
        </>
    )
}

export default Navbar
