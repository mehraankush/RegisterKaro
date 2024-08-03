import Image from 'next/image'
import React from 'react'


const campanies = [
    { img: '/company/spring.png' },
    { img: '/company/slack.png' },
    { img: '/company/wework.png' },
    { img: '/company/oyo.png' },
    { img: '/company/razerpay.png' },
    { img: '/company/icici.png' },
]

const ClientCompanies = () => {
    return (
        <div className='flex gap-2 mt-5 justify-around items-center px-5'>
            {
                campanies.map((company, i) => (
                    <div key={i}>
                        <Image width={100} height={100} src={company.img} alt={company.img} />
                    </div>
                ))
            }
        </div>
    )
}

export default ClientCompanies