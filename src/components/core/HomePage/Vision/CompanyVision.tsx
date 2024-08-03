import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const CompanyVision = () => {
    return (
        <section className='max-w-7xl mx-auto py-[100px]'>
            <div className='flex justify-between'>

                <div>
                    <Image alt='Image'
                        width={1000} height={1000}
                        className='w-[300] h-[400px] object-contain'
                        src='/home/vision.png'
                    />
                </div>

                <div className='space-y-10'>
                    <div className='space-y-2'>
                        <p className='text-3xl'>Why Opt for Launchwise?</p>
                        <p className='text-xs font-light'>Delegate workspace customization and management to us, allowing you to concentrate on your core business activities while we ensure your workspace is primed for growth.</p>
                    </div>

                    <div className=' border-l-4 border-blue500 mt-5'>
                        <p className='font-bold text-xl pl-5'>Prime Nationwide Options</p>
                        <p className='font-light ml-5 text-sm'>Explore our diverse and unparalleled portfolio of office spaces, offering the finest options strategically located across the nation</p>
                    </div>

                    <div className='flex flex-col gap-2  space-y-1 mt-5 text-slate-700'>
                        <div className='flex gap -2 items-center '>
                            <ChevronRight className='h-5 w-5' /> <p className='text-base font-medum'>Comprehensive Office Solutions</p>
                        </div>
                        <div className='flex gap -2 items-center '>
                            <ChevronRight className='h-5 w-5' />
                            <p className='text-base  font-medum'>
                                Strategically Located Premium Spaces
                            </p>
                        </div>
                        <div className='flex gap -2 items-center '>
                            <ChevronRight className='h-5 w-5' />
                            <p className='text-base  font-medum'>Cost-Effective Solutions with Modern Amenities</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyVision