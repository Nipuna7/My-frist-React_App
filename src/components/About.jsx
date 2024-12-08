import React from 'react'
import aboutImage from "../assets/about.png"
import aboutImage2 from '../assets/about2.png'

//motion
import { motion } from 'framer-motion'
//varriants
import { fadeIn } from '../shared/variants'

function About() {
    return (
        <div className='p-4 mx-auto space-y-10 md:px-14 max-w-s' id='about'>
            <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
                <motion.div
                    variants={fadeIn('right', 0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-1/2'>
                    <img src={aboutImage} alt='' />
                </motion.div>

                {/* about content */}
                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-[776px] mr-24'>
                    <h2 className='mb-5 text-3xl font-bold leading-normal md:text-5xl text-primary'>We have been improving our product
                        <span className='text-secondary'> for many years.</span></h2>
                    <p className='text-lg text-tartiary mb-7'>
                        A good example of a paragraph contains a topic conclusion.
                        There ara many different kinds of animals that live in china.
                    </p>
                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>

            {/* 2nd part */}
            <div className='flex flex-col items-center justify-between gap-8 md:flex-row-reverse'>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-1/2'>
                    <img src={aboutImage2} alt='' />
                </motion.div>

                {/* about content */}
                <motion.div
                    variants={fadeIn('right', 0.5)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:w-[776px] ml-24'>
                    <h2 className='mb-5 text-3xl font-bold leading-normal md:text-5xl text-primary'>You can practice at any
                        <span className='text-secondary'> time convinent for you.</span></h2>
                    <p className='text-lg text-tartiary mb-7'>
                        A good example of a paragraph contains a topic conclusion.
                        There ara many different kinds of animals that live in china.
                    </p>
                    <button className='btnPrimary'>Get Started</button>
                </motion.div>
            </div>
        </div>
    )
}

export default About
