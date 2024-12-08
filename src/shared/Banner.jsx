import React from 'react'
//motion
import { motion } from 'framer-motion'
//varriants
import { fadeIn } from './variants'

function Banner({ heading, subheading, btn1, btn2, imagepath }) {
    return (
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col items-center justify-between gap-10 md:flex-row-reverse'>
                {/* banner image */}
                <motion.div
                    variants={fadeIn('down', 0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <img src={imagepath} alt='image-1' className='lg:h-[386px] rounded-br-[80px] rounded-xl' />
                </motion.div>


                {/* banner content */}
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-3/5'>

                    <h2 className='mb-6 text-4xl font-bold leading-relaxed text-white md:text-7xl'>{heading}</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>
                        {subheading}
                    </p>
                    <div className='space-x-5 space-y-4'>
                        <button className='btnPrimary'>
                            {btn1}
                        </button>
                        <button className='btnPrimary'>
                            {btn2}
                        </button>
                    </div>
                </motion.div>


            </div>
        </div>
    )
}

export default Banner
