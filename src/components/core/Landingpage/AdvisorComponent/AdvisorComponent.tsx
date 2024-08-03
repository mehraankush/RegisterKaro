import Image from 'next/image'
import React from 'react'

const AdvisorComponent = () => {
    return (
        <div className='flex justify-around py-10 text-black mt-7'>

            <div className=' flex justify-center items-center'>
                <div className=' space-y-5'>
                    <div className='flex items-center gap-2 justify-center'>
                        <div>
                            <Image width={100} height={100}
                                alt='call'
                                src='/call.svg'
                                className='h-[50px] w-[50px]'
                            />
                        </div>
                        <p className='text-xl  font-semibold'>
                            <span className='font-bold'>Expert Guidance:</span>
                            Consultation <br /> and Company Formation
                        </p>
                    </div>

                    <p className='ml-5 tracking-wider text-slate-400'>Book a free CONSULTATION with our CA/CS and <br />
                        company formation expert.</p>

                    <div className='pt-10 ml-5'>
                        <button className='p-2 text-white px-8 bg-orange rounded-md'>
                            Talk to an Expert
                        </button>
                    </div>

                </div>
            </div>

            <div>
                <Image width={1000} height={1000}
                    alt='advisor'
                    src='/advisor.png'
                    className='h-[400px] w-[400px]'
                />
            </div>
        </div>
    )
}

export default AdvisorComponent