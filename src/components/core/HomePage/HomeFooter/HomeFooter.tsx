import Image from 'next/image'
import React from 'react'
import { Facebook, Instagram, Linkedin, Mail, Navigation, Phone, Twitter } from 'lucide-react'
import { FooterData } from '@/data/Footer'

const HomeFooter = () => {
    return (
        <div className='max-w-7xl mx-auto text-white py-[100px]'>
            <div className='grid grid-cols-3 gap-10'>
                <div className='flex justify-center items-start'>
                    <div className='flex flex-col gap-3 '>
                        <Image width={100} height={100}
                            alt='Logo' src='/logo.svg'
                            className='w-[200px] h-[100px]'
                        />
                        <div className='flex justify-between items-center mt-5'>
                            <Facebook />
                            <Instagram />
                            <Linkedin />
                            <Twitter />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-5 '>
                    {
                        FooterData.map((data, i) => (
                            <div key={i}>
                                <p className='font-bold'>{data.title}</p>
                                <div className='flex flex-col gap-2 mt-3'>
                                    {data.type.map((ty, i) => (
                                        <p key={i} className='text-slate-300 text-sm'>{ty}</p>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div>
                    <div>
                        <p className='font-bold'>Join the newsletter</p>
                        <div className='flex gap-2 mt-2'>
                            <input type="text"
                                placeholder='enter your email'
                                className='focus:border-none px-5 bg-transparent border  focud:outline-none p-2 rounded-full'
                            />
                            <button className='bg-blue500 font-semibold px-8 p-2 rounded-full'>Subscribe</button>
                        </div>
                    </div>
                    <div className='mt-5 space-y-7 '>
                        <p className='text-left text-lg font-semibold text-slate-300 '>Feel free to connect with us</p>

                        <div className='flex justify-between gap-5'>
                            <div className='flex justify-center items-center text-sm gap-2 text-slate-300'>
                                <Phone /> <p>+919311221210</p>
                            </div>
                            <div className='flex justify-center items-center text-sm gap-2 text-slate-300' >
                                <Mail /> <p>virtualoffice@teamco.work</p>
                            </div>
                        </div>

                        <div className='flex text-sm  gap-3 text-slate-300'>
                            <Navigation fill='black' />
                            <p>704, Palm Court, Mehrauli-Gurgaon Rd,<br /> Gurugram, Haryana, 122007</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomeFooter