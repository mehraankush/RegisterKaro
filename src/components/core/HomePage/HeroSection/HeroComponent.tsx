import SearchComponent from '@/components/common/SearchComponent'
import { Cities } from '@/data/city'
import Image from 'next/image'
import React from 'react'

const HeroComponent = () => {
    return (
        <section className='text-white flex justify-center items-center h-full'>
            <div className='space-y-2'>
                <p>From a single desk to a whole building. The choice is yours.</p>
                <h1 className='text-3xl font-semibold'>Discover the Ultimate Workspace Solution</h1>
                <div>
                    <SearchComponent />
                    <div className='mt-5'>
                        <p className='font-semibold'>Treanding Cities</p>
                        <div className='mt-2 flex gap-5  justify-between'>
                            {
                                Cities.map((city, i) => (
                                    <div key={i}>
                                        <Image alt={city.name} width={100}
                                            height={100} src={city.img}
                                            className='h-[60px] w-[60px]'
                                        />
                                        <p className='text-sm font-semibold'>{city.name}</p>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent