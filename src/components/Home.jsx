import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
 return (
  <div name='home' className='home w-full h-screen bg-[#d0d1ff] '>
   {/*container*/}
   <div className='mx-auto px-10 flex flex-col justify-center bg-main h-screen w-full bg-center bg-cover'>
    <h1 className='text-4xl sm:text-7xl font:bold text-white '>DIFFERENT & BOLD</h1>
    <h2 className='text-4xl sm:text-7xl font:bold text-[#f72585] '>Define YOUR style with unique colors and natural treatments</h2>
  
    <div>
    
    </div>
    <div className="flex justify-center pt-8">
      <button className='text-white group bg-[#deaaff] px-6 py-3 my-2 flex items-center hover:bg-[#7209b7]'>OUR SERVICES <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' /></button>
    </div>
 </div>
 
  </div>
 )
}

export default Home
