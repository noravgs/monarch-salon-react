import React from 'react'
import Skill from '../Skill'

const Services = () => {
 return (
  <div name='skills' className='w-full h-screen bg-[#deaaff] text-white pt-20'>
   {/* container */}
   <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
    <div className='lg:text-4xl flex flex-row justify-center items-center sm:text-right pb-8 pl-4'>
      <p className='text-4xl font-bold inline border-b-4 border-[#7209b7]'>Services</p>
      
    </div>
    <div></div>
     <div className='skills w-full grid grid-cols-2 sm:grid-cols-1 gap-6 text-center py-10'>
       <div className="skillsGrid flex justify-between">
                {/*  Create a div and give it a class of skillsGrid for styling */}
            
                {/*  Let's render multiple copies of the Skill component. Make sure you update the source, alt, and title for each icon */}
                <Skill service="EXPERT BEUTICIANS" source="https://www.svgrepo.com/show/183158/diploma-certificate.svg" alt="The logo icon for figma" title="Figma" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae modi accusantium in repudiandae deserunt illo, id sequi!"/>
                <Skill service="COLOR AND STYLE FOR ANY TYPE OF HAIR" source="https://www.svgrepo.com/show/299830/hair-salon-beauty.svg" alt="The logo icon for react" title="React" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae modi accusantium in repudiandae deserunt illo, id sequi! Asperiores "/>
                <Skill service="BEAUTY PRODUCTS" source="https://www.svgrepo.com/show/299829/cosmetics-ointment.svg" alt="The logo icon for HTML 5" title="HTML 5" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae modi accusantium in repudiandae deserunt illo, id sequi! Asperiores"/>
                <Skill service="NATURAL TREATMENTS" source="https://www.svgrepo.com/show/267075/leaf.svg" alt="The logo icon for CSS3" title="CSS 3" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae modi accusantium"/>
                       
            </div>            
        
       
     </div>
   </div>

   
  </div>
 )
}

export default Services
