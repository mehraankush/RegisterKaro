"use client"
import InputField from '@/components/common/InputField';
import React from 'react'
interface Field {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
}

const fields: Field[] = [
  { label: 'Name', type: 'text', name: 'name', id: 'name', placeholder: 'Your Name' },
  { label: 'Mobile', type: 'text', name: 'mobile', id: 'mobile', placeholder: 'Mobile No.' },
  { label: 'Email', type: 'email', name: 'email', id: 'email', placeholder: 'Email Name' },
  { label: 'City', type: 'text', name: 'city', id: 'city', placeholder: 'City Name' },
];

const FormComponent = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject = Object.fromEntries(formData);
    console.log('Form data:', formDataObject);
    event.currentTarget.reset()
  };

  return (
    <form onSubmit={handleSubmit}
      className='bg-white text-black w-[440px] rounded-sm  p-5 '>

      <div className='text-center space-y-3 pt-2'>
        <h2 className='text-xl font-bold'>Get in touch with us</h2>
        <p className='text-sm  mx-auto '>
          Submit your Details to get an Instants
          <span className='text-[#EA901D]'>
            &nbsp;All-inclusive&nbsp;
          </span>
          Quote to your email and a
          <span className='text-[#EA901D]'>
            &nbsp;FREE &nbsp;
          </span>
          Expert consultation</p>
      </div>

      <div className='pt-2'>
        {fields.map((field, index) => (
          <InputField key={index} {...field} />
        ))}
      </div>

      <div className='flex justify-center px-2'>
        <button
          type='submit'
          className='bg-darkBlue p-2  text-white rounded-md mt-5 w-full'>
          Get a Detailed Quotation Now!
        </button>
      </div>

    </form>
  )
}

export default FormComponent