import Image from 'next/image'
import React from 'react'

const GuideComponent = () => {
    return (
        <section className='flex justify-around  text-black  py-10'>

            <div className='flex justify-end '>

                <div className=' flex w-[500px]   text-left p-10 space-y-3 flex-col'>

                    <h1 className='text-4xl text-blue font-extrabold'>FREE DOWNLOAD:</h1>
                    <p className='text-xl text-blue font-bold'>The ultimate checklist for <br /> virtual office 2024</p>
                    <p className='py-2 tracking-wider text-slate-400'>
                        Discover the step-by-step procedures and
                        <br />
                        essential considerations you need to know
                        <br />
                        before setting up a Virtual Office in India.
                    </p>

                    <div className='pt-5'>
                        <button className='border p-2 px-10 text-white bg-orange rounded-md'>
                            Send Me The Checklist
                        </button>
                    </div>
                </div>

            </div>

            <div>
                <Image
                    width={1000} height={1000}
                    alt='guidelist'
                    src='/VF.png'
                    className='w-[350px] h-[450px]'
                />
            </div>

        </section>
    )
}

export default GuideComponent