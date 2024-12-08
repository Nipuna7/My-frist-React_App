import React from 'react'
import Banner from '../shared/Banner'

function Home() {
    return (
        <div className='p-4 mx-auto mt-24 md:px-12 max-w-screen-2xl' id='home'>
            <Banner
                imagepath="./src/assets/api.jpg"
                heading="Develop your skills without diligence"
                subheading="A good example of a paragraph contains a topic sentence, details and a 
           conclusion. there are many defferent kinds of animals that live in china."
                btn1={'Get Started'}
                btn2={'Discount'} />
        </div>
    )
}

export default Home
