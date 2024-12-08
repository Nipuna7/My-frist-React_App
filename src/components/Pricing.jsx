import React, { useState } from 'react'

//motion
import { motion } from 'framer-motion'
//varriants
import { fadeIn } from '../shared/variants'

function Pricing() {

    const [isYearly, setIsYearly] = useState(false);
    const packages = [
        {
            name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "A commen form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            green: "/src/assets/Rectangle.png"
        },
        {
            name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: "A commen form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            green: "/src/assets/Rectangle.png"
        },
        {
            name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: "A commen form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            green: "/src/assets/Rectangle.png"
        },
    ]

    return (
        <div className='p-4 py-10 mx-auto md:px-14 max-w-s' id='pricing'>
            <div className='text-center'>
                <h2 className='mb-2 text-3xl font-extrabold md:text-5xl text-primary'>Here are all our plans</h2>
                <p className='px-4 mx-auto text-tartiary md:w-1/3'>
                    A simple paragraph is compised of three major components.
                    The which is often a declarative sentence.
                </p>

                {/* toggle pricing */}
                <div className='mt-16'>
                    <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
                        <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                        <div className='h-6 transition duration-200 ease-in-out bg-gray-300 rounded-full w-14'>
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? 'bg-primary ml-8' : 'bg-gray-500'}`}></div>
                        </div>
                        <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                    </label>
                    <input type='checkbox' id='toggle' className='hidden' checked={isYearly} onChange={() =>
                        setIsYearly(!isYearly)} />

                </div>
            </div>

            {/* pricing cards */}
            <motion.div
                variants={fadeIn('up', 0.5)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className='grid gap-10 mx-auto mt-20 sm:grid-cols-2 lg:grid-cols-3 md:w-11/12'>
                {
                    packages.map((pkg, index) => <div key={index} className='px-4 py-10 border rounded-lg md:px-6 shadow-3xl' >
                        <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                        <p className='my-5 text-center text-tartiary'>{pkg.description}</p>
                        <p className='mt-5 text-4xl font-bold text-center text-secondary'>
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
                            <span className='text-base font-medium text-tartiary'>/{isYearly ? 'year' : 'month'}</span>
                        </p>
                        <ul className='px-4 mt-4 space-y-2'>
                            <li className='flex items-center gap-2'><img src={pkg.green} alt='' className='w-4 h-4' />Videos of Lessons</li>
                            <li className='flex items-center gap-2'><img src={pkg.green} alt='' className='w-4 h-4' />Homework check</li>
                            <li className='flex items-center gap-2'><img src={pkg.green} alt='' className='w-4 h-4' />Additional practical task</li>
                            <li className='flex items-center gap-2'><img src={pkg.green} alt='' className='w-4 h-4' />Monthly conferences</li>
                            <li className='flex items-center gap-2'><img src={pkg.green} alt='' className='w-4 h-4' />Personal advice from teachers</li>
                        </ul>
                        <div className='flex items-center justify-center w-full mx-auto mt-8'>
                            <button className='btnPrimary'>Get started</button>
                        </div>
                    </div>)
                }
            </motion.div>
        </div>
    )
}

export default Pricing
