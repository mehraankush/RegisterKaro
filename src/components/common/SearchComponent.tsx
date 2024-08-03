import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SearchComponent = () => {
  return (
    <div className='bg-slate-100  p-4 rounded-md w-full px-5'>
      <div className='flex gap-2 w-full'>

        <div className='flex gap-2 bg-white rounded-sm border border-slate-300 items-center w-full justify-between px-2'>
          <input type='text'
            className='p-2 py-3 text-black w-[75%]   focus:border-none focus:outline-none'
            placeholder='Search City' />
          <Link href='/home' >
            <p className='text-blue500 underline w-full text-xs font-semibold '>Search Nearby</p>
          </Link>
        </div>

        <div>
          <button className='p-3 rounded-md bg-blue500 flex gap-2 items-center  px-5'>
            <Image alt='Search' width={100} height={100} src="/home/search.svg"
              className='h-5 w-5'
            />
            <p className='pr-5'>Search</p>
          </button>
        </div>
      </div>

    </div>
  )
}

export default SearchComponent