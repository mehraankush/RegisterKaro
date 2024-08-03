import React from 'react'
import Image from 'next/image'

const solution = [
  {
    title: "Prestigious Business Addresses",
    description: "Access to prestigious business addresses in key locations, enhancing your brand image and credibility."
  },
  {
    title: "Nationwide Presence",
    description: "Establish a presence in multiple cities across India without the need for physical office space."
  },
  {
    title: "Mail Handling Services",
    description: "Efficient management of mail and packages, including forwarding, scanning, and storage, ensuring seamless communication."
  },
  {
    title: "Professional Call Answering",
    description: "Professional receptionists manage incoming calls with personalized greetings, providing a professional image for your business."
  },
  {
    title: "Flexibility and Cost-Effectiveness",
    description: "Enjoy the flexibility of virtual office solutions with customizable plans, avoiding the high costs associated with traditional office leases."
  },
  {
    title: "Meeting Room Facilities",
    description: "Access to meeting rooms and conference facilities in various cities, allowing for seamless collaboration and client meetings."
  },
  {
    title: "Business Expansion",
    description: "Expand your business footprint across India without the overhead costs of physical office space, enabling growth and scalability."
  },
]
const WorkplaceSolution = () => {
  return (
    <section className='flex justify-between mt-10 pb-10'>

      <div className='flex-1 flex ml-10 items-center'>
        <Image alt='workplace'
          width={1000} height={1000}
          src="/home/workspace/ws.png"
          className='h-[400px] w-[350px]'
        />
      </div>

      <div className='flex-1'>
        <div>
          <h2 className=' text-4xl'>Discover the Ultimate <br />  Workspace Solution</h2>
          <p className='text-sm font-light'>From solo entrepreneurs to growing teams, find everything you need under one roof. Whether it's pay-per-use plans or fixed desks, our flexible options cater to your unique work style, ensuring seamless productivity and success.</p>
        </div>

        <div className='grid grid-cols-2 gap-10 mt-10'>
          {
            solution.map((sol, i) => (
              <div key={i}>
                <p className='font-semibold'>• {sol.title}</p>
                <p className='text-sm font-light text-slate-600'>{sol.description}</p>
              </div>
            ))
          }
        </div>
        <p className='text-blue500 underline mt-5 text-sm'>{`Talk to an Expert >`}</p>

      </div>
    </section>
  )
}

export default WorkplaceSolution