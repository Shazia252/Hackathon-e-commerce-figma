import React from 'react'

const myAccount = () => {
  return (
    <section className='contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md'>
        <h2 className='text-4xl font-bold mb-6 text-center' data-aos="fade-up">Login</h2>
       <form>
        <input type='text' placeholder='Full Name' className='w-full mb-4 px-4 border border-gray-600 rounded-md' required />
        <input type='email' placeholder='Email Address' className='w-full mb-4 px-4 border border-gray-600 rounded-md' required />
        <input type='text' placeholder='Phone Number' className='w-full mb-4 px-4 border border-gray-600 rounded-md' required />
        <textarea placeholder='Your Message' className='w-full mb-4 px-4 py-2 border border-gray-500 rounded-md' rows={5} required></textarea>
        <button type='submit' className='w-full text-[#FB2E86] hover:text-white py-2 rounded-md'>Sing In</button>
       </form>

    </section>
  )
}

export default myAccount
