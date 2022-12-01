import React from 'react'

const About = () => {
 return (
  <div name='about' className='w-full h-screen bg-[#4cc9f0] text-white'>
   <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
     <div className='lg:text-4xl flex flex-col justify-center items-center sm:text-right pb-8 pl-4'>
         <p className='text-4xl font-bold inline border-b-4 border-[#7209b7]'>About</p>
     </div>
     <div></div>
     </div>
     <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='sm:text-right text-2xl font-bold'>
       <p>We love what we do, Bring out the beauty you have always dreamed of.</p>
      </div>
      <div className="text-2xl">
       <p>We specialize in all hair types. What sets us apart is our passion for healthy hair care. We enable clients to live their lives more fully, improving the quality of their relationships and making them feel beautiful, confident and ready to achieve their goals.</p>
      </div>
     </div>
    </div>
    </div>
   
 );
};

export default About
