import { banefits } from '@/data/Banefits'
import Image from 'next/image'
import React from 'react'

const BanefitComponent = () => {
    return (
        <div className='flex justify-between text-black gap-10 mt-[100px]'>
            <div  className=' flex-1 flex justify-center items-center '>
                <Image 
                width={1000} height={1000} 
                alt='building' 
                src='/building.png' 
                className='h-[400px] w-[400px] object-cover '
                />
            </div>

            <div className='flex-1 p-5'>
                <h1 className='font-bold text-2xl'>Accessible. Affordable. Adaptable</h1>
                <p className='text-sm'>Whether you're an established enterprise or a scaling startup, your Virtual office should drive your business forward. Our virtual office solutions take your business places! (Accessible. Affordable. Adaptable)
                </p>
                <div className='grid lg:grid-cols-2 mt-6 gap-10'>
                    {banefits.map((benefit, i) => (
                        <div key={i} >
                            <div>
                                <Image alt='icon' width={100} height={100} src={benefit.icon} className='h-8 w-8'/>
                            </div>
                            <p className='font-semibold'>{benefit.title}</p>
                            <p className='text-sm text-slate-400'>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BanefitComponent