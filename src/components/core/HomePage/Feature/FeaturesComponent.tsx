import { HomeFeatures } from '@/data/HomeFeatures'
import Image from 'next/image'
import React from 'react'

const FeaturesComponent = () => {
    return (
        <div className='text-black grid grid-cols-4 gap-10 mt-10 pb-10'>
            {
                HomeFeatures.map((feature, i) => (
                    <div key={i} className='border border-slate-200 flex gap-5 items-center p-4 pb-2 rounded-xl'>
                        <div>
                            <Image width={100} height={100}
                                src={feature.img}
                                alt={feature.title}
                                className='object-contain w-[70px] h-[100px]'
                            />
                        </div>
                        <div className='space-y-5'>
                            <p className=' text-blue500 capitalize border-black border-b w-3/5'>{feature.title}</p>
                            <p className='text-slate-400 text-sm'>{feature.description}</p>
                            <div>
                                <Image width={100} height={100}
                                    src='/home/features/arrow.svg'
                                    alt='arrow'
                                    className=' w-8'
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturesComponent