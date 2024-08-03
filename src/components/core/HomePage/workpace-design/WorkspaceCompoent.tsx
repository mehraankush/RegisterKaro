import React from 'react'
import { workspace } from '@/data/workdpace'
import { Search } from 'lucide-react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"


const navigate = [
    "Office Space",
    "Coworking",
    "Virtual Offices",
    "Meeting rooms",
]
const WorkspaceCompoent = () => {
    return (
        <section className='max-w-7xl mx-auto pb-10 p-5'>

            <div className='flex justify-between  pt-8'>
                <h2 className='font-semibold text-xl'>Flexible workspace designed around your needs</h2>

                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <Image alt='flag' width={100} height={100}
                            src='/home/workspace/india.png'
                            className='h-3 w-3'
                        />
                        <p>Prices for India</p>
                    </div>
                    <div className='text-black flex gap-2'>
                        <Search className='h-3 w-3' />
                        <p className='text-xs underline'>Search for a city or area to refine pricing</p>
                    </div>
                </div>
            </div>

            <div className='px-[70px]'>
                <div className='w-full bg-white broedr border-slate-200 mt-10 flex justify-between  rounded-full'>
                    {
                        navigate.map((nav, i) => (
                            <button key={i}
                                className={`${i == 0 ? 'bg-green text-white' : 'text-slate-600'} text-xl  p-2 rounded-full px-10`}
                            >
                                {nav}
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className='mt-10 space-y-5'>
                <p className='text-sm'>Our flexible, fully-customisable office rentals are available by the hour, day, or as long as you need.</p>

                <div className='grid grid-cols-5 gap-2 h-full'>
                    {
                        workspace.map((work, i) => (
                            <Card key={i} className='bg-white rounded-b-md '>
                                <CardHeader className='p-0'>
                                    <Image alt={work.title}
                                        width={100} height={100}
                                        src={work.img}
                                        className='w-[250px] h-[230px] object-cover rounded-t-md'
                                    />
                                </CardHeader>
                                <CardContent className='p-0 overflow-hidden h-[210px]'>
                                    <div className='px-2 mt-2 space-y-2'>
                                        <p>{work.title}</p>
                                        <p className='text-sm font-light h-10 overflow-hidden'>{work.description}</p>
                                    </div>

                                    <div className='flex flex-col gap-3  px-2 mt-5 '>
                                        {
                                            work.benefits.map((benefit, i) => (
                                                <div key={i} className='flex gap-2 text-sm text-slate-700'>
                                                    {benefit.icon && <benefit.icon className='w-5 h-5' />}
                                                    <p>{benefit.des}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </CardContent>
                                <CardFooter className={`p-0 flex flex-col  h-full pb-4 space-y-2`}>
                                    <p className='px-2 text-sm font-normal text-slate-600 pt-5'>{work.plan}</p>
                                    <div className='flex justify-between w-full px-2'>
                                        <button className='bg-blue500 text-xs p-2 px-4 rounded-full font-light text-white'>Book Now</button>
                                        <button className='text-blue500 text-xs p-2 px-4 rounded-full font-light border border-blue500'>Learn More</button>
                                    </div>
                                </CardFooter>

                            </Card>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default WorkspaceCompoent

{/* <div className='flex justify-between flex-col h-full'>

<CardContent className='p-0 border border-black   relative'>
    <div className='space-y-3'>
        <div className='space-y-1 py-2 px-2'>
            <p>{work.title}</p>
            <p className='text-sm font-light h-10 overflow-hidden'>{work.description}</p>
        </div>
        <div className='flex flex-col gap-2  px-2 '>
            {
                work.benefits.map((benefit, i) => (
                    <div key={i} className='flex gap-1 text-sm'>
                        {benefit.icon && <benefit.icon className='w-5 h-5' />}
                        <p>{benefit.des}</p>
                    </div>
                ))
            }
        </div>
    </div>
    <CardFooter className={`p-0 flex flex-col  h-full`}>
        <p className='px-2 text-sm font-normal text-slate-600 pt-5'>{work.plan}</p>
        <div className='flex justify-between'>
            <button className='bg-blue500 text-xs p-2 px-4 rounded-full font-light text-white'>Book Now</button>
            <button className='text-blue500 text-xs p-2 px-4 rounded-full font-light border border-blue500'>Learn More</button>
        </div>
    </CardFooter>
</CardContent>
</div> */}