import React from 'react'

const Newslatter = () => {
    return (
        <div className='px-10 mt-10'>
            <div className='flex justify-between px-[50px] py-7 items-center bg-gradient-to-r to-[#D71489] from-[#004788] p-5'>
                <div>
                    <p className='text-xl text-white'>Subscribe For Latest <br />
                        Newsletter</p>
                </div>
                <div>
                    <input type="text" placeholder='your email' className='p-3 pr-10 pl-5 text-black  rounded-l-md focus:border-none focus:outline-none'/>
                    <button className='bg-black py-3 px-2 rounded-r-md text-white'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newslatter