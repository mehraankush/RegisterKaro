import Image from 'next/image'
import React from 'react'

const ExpertSOlution = [
    {
        title: "Company Registration",
        description: " Enhance your professional image and organizational presence by choosing a virtual address over your residential one.",
        img: "/home/workspace/expert/1.png"
    },
    {
        title: "Streamlined GST Registration",
        description: "Simplify your GST registration process through the use of a virtual address, meeting government requirements efficiently and affordably.",
        img: "/home/workspace/expert/2.png"
    },
    {
        title: "Centralized Business Hub",
        description: "Establish your virtual office as the hub of your business operations, utilizing it as your official business and mailing address, ensuring efficient mail handling without physical office space constraints.",
        img: "/home/workspace/expert/3.png"
    },
    {
        title: "Efficient Call Management",
        description: "Ensure seamless communication with clients and stakeholders by routing all calls to your virtual address, where a virtual receptionist provides professional and prompt responses.",
        img: "/home/workspace/expert/4.png"
    },
    {
        title: "Flexible Meeting Solutions",
        description: "Impress investors and clients with access to fully-equipped meeting facilities, including boardrooms and conference rooms, available on-demand without the commitment of traditional office leases.",
        img: "/home/workspace/expert/5.png"
    },
]

const ExpertComponent = () => {
    return (
        <div className='mt-10 max-w-7xl mx-auto p-10 py-[100px]'>
            <p className='text-3xl ml-5'>Use Virtual Address For</p>

            <div className='flex justify-between mt-5'>

                <div className='flex-1'>
                    {
                        ExpertSOlution.map((sol, i) => (
                            <div key={i} className='flex gap-5'>
                                <div >
                                    <Image alt={sol.title}
                                        width={1000} height={1000}
                                        className='w-[90px] h-[90px] object-cover'
                                        src={sol.img}
                                    />
                                </div>

                                <div className=' w-full'>
                                    <p className='text-lg font-semibold text-blue500'>{sol.title}</p>
                                    <p className='text-xs text-slate-500 '>{sol.description}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className='flex-1  flex justify-center items-center '>
                    <Image alt="Expert" width={1000} height={1000}
                        className='w-[350px] h-[400px]'
                        src='/home/workspace/expert.png'
                    />
                </div>
            </div>
        </div>
    )
}

export default ExpertComponent