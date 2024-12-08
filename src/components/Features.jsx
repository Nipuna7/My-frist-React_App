import React from 'react'
//motion
import { motion } from 'framer-motion'
//varriants
import { fadeIn } from '../shared/variants'


function Features() {
    return (
        <div className='mx-auto my-24 md:px-14 max-w-screen-2xl' id='feature'>
            <div className='flex flex-col items-start justify-between gap-10 lg:flex-row'>
                <motion.div
                    variants={fadeIn('right', 0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='lg:w-1/4'>
                    <h3 className='mb-3 text-3xl font-bold text-primary lg:w-1/2'>Why we are better than others</h3>
                    <p className='text-base text-tartiary'>
                        A simple paragraph is comprised of three majer components. the first sentence, which is
                        often a declarative sentence, is called the "topic sentence."
                    </p>
                </motion.div>


                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='w-full lg:3/4'>
                    <div className='grid items-start grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2 md:gap-12'>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src="./src/assets/img2.jpg" alt='' className='w-[230px] h-[149px]' />
                                <h5 className='px-5 mt-5 text-2xl font-semibold text-center text-primary'>Conventient study schedule</h5>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16 '>
                            <div>
                                <img src="./src/assets/img2.jpg" alt='' className='w-[230px] h-[149px]' />
                                <h5 className='px-5 mt-5 text-2xl font-semibold text-center text-primary'>Conventient study schedule</h5>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center 
                        hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src="./src/assets/img2.jpg" alt='' className='w-[230px] h-[149px]' />
                                <h5 className='px-5 mt-5 text-2xl font-semibold text-center text-primary'>Conventient study schedule</h5>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Features
