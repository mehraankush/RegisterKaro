import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'


const Nav = [
    {
        title: "Workplace & service",
        icon: ChevronDown
    },
    {
        title: "Get Started",
        icon: ChevronDown
    },
    {
        title: "More",
    },
    {
        title: "Help",
        icon: ChevronDown
    },
]

const HomeNavbar = () => {
    return (
        <div className='bg-white  border-b '>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-around items-center p-2'>
                    <div>
                        <Link href='/'>
                            <Image alt='Logo' width={100} height={100}
                                src='/Blogo.svg'
                                className='h-[60px] w-[60px]'
                            />
                        </Link>
                    </div>

                    <div className='flex gap-2 text-slate-400 text-sm'>
                        {
                            Nav.map((nav, i) => (
                                <button key={i} className='flex gap-1'>
                                    <p>{nav.title}</p>
                                    {nav.icon && <nav.icon />}
                                </button>
                            ))
                        }
                    </div>

                    <div className='flex gap-2'>
                        <div>
                            <Image alt='Logo' width={100} height={100}
                                src='/nav/call.svg'
                                className='h-5 w-5'
                            />
                        </div>
                        <Separator orientation="vertical" className='h-7' />
                        <div>
                            <Image alt='Logo' width={100} height={100}
                                src='/nav/user.svg'
                                className='h-5 w-5'
                            />
                        </div>
                    </div>

                    <div>
                        <button className='rounded-full font-light p-3 px-6 bg-blue500 text-white'>Enquire Now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeNavbar