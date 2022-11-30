import React from 'react'

const Contact = () => {
 return (
  <div name='contact' className='w-full text-white h-screen bg-[#deaaff] flex justify-center items-center p-4 pt-6'>
   <form method='POST' action="https://getform.io/f/c1900021-a4a3-456f-90df-3a7b02baba9f" className='flex flex-col max-w-[600px] w-full'>
     <div className='lg:text-4xl flex flex-col justify-center items-center sm:text-right pb-8 pl-4'>
      <p className='text-4xl font-bold inline border-b-4 border-[#7209b7]'>Contact</p>
      <p className='text-white py-4'>Schedule your next appoitment.</p>
     </div>
     <input className='bg-white p-2 text-[#6B7280]' type="text" placeholder='name' name='name' />
     <input className='my-4 p-2 bg-white text-[#6B7280]' type="text" placeholder='Email' name='email' />
     <input
              type="date"
              name="date"
              id="date"
              placeholder='Date'
              class="w-full border border-[#e0e0e0] bg-white my-4 p-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
     <textarea className='bg-white p-2 text-[#6B7280]' name="message"  rows="10" placeholder='Message'></textarea>
     <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center bg-[#7209b7] hover:text-black hover:bg-[#ade1e5]'>Submit</button>
   </form>
   
  </div>
 )
}

export default Contact
