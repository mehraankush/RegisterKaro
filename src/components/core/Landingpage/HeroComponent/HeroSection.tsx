import React from 'react'
import FormComponent from './Form'

const HeroSection = () => {
    return (
        <section className="flex text-white justify-between h-full mt-10 pb-10">
            <div className=" flex justify-start h-full pt-[150px] py-[230px]">
                <h1 className=" text-5xl font-bold w-4/5">
                    Work From Anywhere, Grow Everywhere.
                    Get Your Instant Virtual <br />Office
                </h1>
            </div>

            <div className=" pb-10 p-5">
                <FormComponent />
            </div>
        </section>
    )
}

export default HeroSection