import React from 'react'
import { data } from '../Data/data.js'

const Lookbook = () => {

 // projects file
 const project = data;
 //setProject(data);

return (
 <div name='work' className='w-full md:h-screen text-white bg-[#4cc9f0]'>
   <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
     <div className='lg:text-4xl flex flex-col justify-center items-center sm:text-right pb-8 pl-4'>
       <p className='text-4xl font-bold inline border-b-4 border-[#7209b7]'>
         Lookbook
       </p>
     </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
       
       {/* Gird Item */}
       {project.map((item, index) => (
<div
 key={index}
 style={{ backgroundImage: `url(${item.image})` }}
 className="shadow-lg shadow-[#040c16] group container rounded-md 
           flex justify-center text-center items-center mx-auto content-div transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
>
 {/* Hover effect for images */}
 <div className="opacity-0 group-hover:opacity-100 ">
   <span className="text-2xl font bold text-white tracking-wider ">
     {item.name}
   </span>
   
 </div>
</div>
))}


</div>
   </div>
 </div>
);
};

export default Lookbook;