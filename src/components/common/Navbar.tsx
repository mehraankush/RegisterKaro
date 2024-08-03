import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <section className='flex justify-between items-center  pt-5'>
            <div>
                <Image src='/logo.svg' width={100} height={100} alt='Logo' />
            </div>

            <button className='capitalize bg-lightBlue p-3 text-white rounded-sm px-5 text-xs'>
                enquire now &rarr;
            </button>
        </section>
    )
}

export default Navbar