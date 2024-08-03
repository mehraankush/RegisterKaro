import { stepsData } from '@/data/stepsData'
import Image from 'next/image'
import React from 'react'

const StepsComponents = () => {
    return (
        <section className='text-black mt-10 py-10'>

            <div className='text-center space-y-2 pb-5'>
                <h2 className=' text-xl fontt-semibold'>Get Your Virtual Office Up and Running in <span className='font-bold'>3 Easy Steps!</span></h2>
                <p className='font-light'>Procedure to obtain Virtual office address.</p>
            </div>

            <div className='flex justify-between gap-5 mt-10 '>
                {
                    stepsData.map((steps, i) => (
                        <div key={i} className='w-[350px] flex flex-col justify-between'>
                            <div className='flex justify-center'>
                                <Image alt='Setps' width={100} height={100} src={steps.icon} />
                            </div>
                            <div className='flex justify-center py-3'>
                                <p className='font-bold text-sm text-center w-3/5'>{steps.title}</p>
                            </div>
                            <div className='flex justify-center'>
                                <p className='w-4/5 text-center text-sm font-light text-slate-500'>{steps.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default StepsComponents