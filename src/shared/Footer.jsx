import React from 'react'
import { PiApplePodcastsLogoFill } from "react-icons/pi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
    return (
        <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
            <div className='flex flex-col gap-10 my-12 md:flex-row'>
                <div className='space-y-8 md:w-1/2'>
                    <a href='/' className='flex items-center space-x-3 text-2xl font-semibold text-primary'>
                        <PiApplePodcastsLogoFill className='items-center inline-block w-10 text-white' />
                        <span className='text-white'>XYZ</span>
                    </a>
                    <p className='text-white md:w-1/2'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence</p>
                    <div>
                        <input type='email' name='email' id='email' placeholder='Your email' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                        <input type='submit' value="Subscribe" className='px-4 py-2 -ml-2 transition-all duration-300 rounded-md cursor-pointer bg-secondary hover:bg-white hover:text-primary' />
                    </div>
                </div>

                {/* footer navigations */}
                <div className='flex flex-col flex-wrap items-start justify-between gap-8 md:w-1/2 md:flex-row'>
                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>Overview</a>
                            <a href='/' className='block hover:text-gray-300'>Features</a>
                            <a href='/' className='block hover:text-gray-300'>About</a>
                            <a href='/' className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>How does it works?</a>
                            <a href='/' className='block hover:text-gray-300'>Where to ask question?</a>
                            <a href='/' className='block hover:text-gray-300'>How to play?</a>
                            <a href='/' className='block hover:text-gray-300'>What is needed for this?</a>
                        </ul>
                    </div>
                    <div className='mt-5 space-y-4'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <p className=' hover:text-gray-300'>(+94)7601555863</p>
                            <p className=' hover:text-gray-300'>123 xyz xyz</p>
                            <p className=' hover:text-gray-300'>abubaba,lepazoo-chaka</p>
                            <p className=' hover:text-gray-300'>04596</p>
                        </ul>
                    </div>
                </div>

            </div>

            <hr />
            <div className='flex flex-col justify-between gap-8 my-8 sm:flex-row sm:items-center'>
                <p>@ XYZ 2024 --- 20XX. All rights reserved.</p>
                <div className='flex items-center space-x-5'>
                    <AiOutlineFacebook className='w-8 h-8 transition-all duration-300 cursor-pointer hover:-translate-y-4' />
                    <FiInstagram className='w-8 h-8 transition-all duration-300 cursor-pointer hover:-translate-y-4' />
                    <FaXTwitter className='w-8 h-8 transition-all duration-300 cursor-pointer hover:-translate-y-4' />
                    <AiOutlineLinkedin className='w-8 h-8 transition-all duration-300 cursor-pointer hover:-translate-y-4' />
                </div>
            </div>
        </div>

    )
}

export default Footer
