import React from 'react'
import FormComponent from '../HeroComponent/Form'
import Image from 'next/image'
import { Mail, Navigation, Phone } from 'lucide-react'


const socials = [
  { icon: '/socials/Facebook.svg' },
  { icon: '/socials/insta.svg' },
  { icon: '/socials/linkedin.svg' },
  { icon: '/socials/X.svg' }
]

const FooterComponent = () => {
  return (
    <div className="bg-[url('/footerbackground.png')] text-black bg-no-repeat bg-cover  p-10 flex justify-between ">
      <FormComponent />

      <div>

        <div className='flex justify-center'>
          <Image
            width={100} height={100}
            alt='Logo' src="/Logo.svg"
          />
        </div>

        <div className='mt-5 space-y-7'>
          <p className='text-center text-xl font-semibold'>Feel free to connect with us</p>

          <div className='flex justify-between gap-5'>
            <div className='flex justify-center items-center gap-2'>
              <Phone /> <p>+919311221210</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <Mail /> <p>virtualoffice@teamco.work</p>
            </div>
          </div>

          <div className='flex  gap-3'>
            <Navigation fill='black' />
            <p>704, Palm Court, Mehrauli-Gurgaon Rd,<br /> Gurugram, Haryana, 122007</p>
          </div>
        </div>

        <div className='flex justify-between mt-[100px]'>
          {
            socials.map((social, i) => (
              <div key={i} className='cursor-pointer '>
                <Image alt='social' width={100} height={100} src={social.icon}
                  className='w-8 h-8'
                />
              </div>
            ))
          }
        </div>

      </div>

      <div className='flex items-center'>
        <Image width={1000} height={1000}
          src='/map.png' alt="Map"
          className='w-[400px] h-[400px]'
        />
      </div>


    </div>
  )
}

export default FooterComponent