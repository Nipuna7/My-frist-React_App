import React from 'react'
import Banner from '../shared/Banner'

function Newsletter() {
    return (
        <div className='p-4 mx-auto my-12 md:px-14 max-w-screen-2xl'>
            {/* use our banner component and pass props */}
            <Banner
                imagepath="./src/assets/Newsletter.png"
                heading="Each student can share their discount code with friends"
                subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the \"topic sentence.\""}
                btn1={"I have a code"}
                btn2={""}
            />
        </div>
    )
}

export default Newsletter
