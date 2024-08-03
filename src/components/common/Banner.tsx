import React from 'react'

const BannerComponent = () => {
    return (
        <section className='w-full p-2 bg-lightBlue text-white text-center'>
            <p>Flash sale
                <span className='font-bold'>20% </span>
                Discount for New Clients, use code
                <span className='font-bold'>“QUICK20” </span>
                at Checkout!</p>
        </section>
    )
}

export default BannerComponent