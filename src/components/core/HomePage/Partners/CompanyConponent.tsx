import Image from 'next/image'
import React from 'react'


const Partners = [
    '/company/spring.png',
    '/company/slack.png',
    '/company/wework.png',
    '/company/oyo.png',
    '/company/razerpay.png',
    '/company/icici.png',
]
const CompanyComponent = () => {
    return (
        <div className='max-w-7xl mx-auto p-5 py-[80px]'>
            <p className='text-2xl font-bold'>{`Trusted by the world’s largest companies`}</p>

            <div className='flex w-full justify-between  items-center px-10 mt-10'>
                {
                    Partners.map((partner, i) => (
                        <div key={i}>
                            <Image alt={partner} width={100} height={100} src={partner} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CompanyComponent