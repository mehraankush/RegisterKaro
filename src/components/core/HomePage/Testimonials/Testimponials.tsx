import Image from 'next/image'
import React from 'react'

const Testimponials = () => {
    return (
        <div className='max-w-7xl mx-auto py-[100px]'>
            <div className='flex gap-5 justify-around '>
                <div className='flex-1  flex justify-center'>
                    <Image alt="clients"
                        width={1000} height={1000}
                        src='/home/testimonials.png'
                        className='w-[600px] h-[300px]'
                    />
                </div>

                <div className='justify-center flex-col items-end flex flex-1 mr-10 space-y-3'>
                    <p className='font-semibold text-xl'>Client Testimonials</p>
                    <p className='text-xs text-right text-slate-500 '>
                        <span className=''> We love hearing feedback from our valued clients.</span><br />
                        <span>  Here's what some of our satisfied customers have to</span><br />
                        <span> say about our services.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimponials