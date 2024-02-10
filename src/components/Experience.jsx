import React from 'react'
import drone from '../assets/drone.jpg'

const Experience = () => {
  return (
    <div name="experience" className='w-full bg-[#FDFDFD]'>
      <div className='w-full h-full max-w-screen-lg flex items-center mx-auto p-4'>
        <div className=' mt-96 p-4 flex flex-col sm:mt-0'>
          <div>
            <h1 className='text-4xl font-bold border-b-4 border-black inline'>Experience</h1>
            <p className='mt-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum fugit odio provident molestiae harum facere illum distinctio voluptatibus inventore, minima dicta obcaecati veritatis quo, exercitationem placeat quia amet culpa neque.</p>
          </div>
          <div className=' mt-14'>
            <div className='flex sm:flex-row flex-col gap-8 items-center'>
              <img className='sm:w-3/5 w-full' src={drone} alt="" />
              <div className='flex flex-col p-4 sm:ml-[-85px]  gap-8 justify-center bg-white'>
                <h1 className='font-bold text-xl'>Drone Project</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nulla sed eveniet nam. Dolore, earum rerum, ipsa, ex quo iure mollitia repellendus amet nesciunt distinctio ratione velit! Pariatur, sapiente eaque!</p>
              </div>
            </div>
            <div>
              <div>
                <img src="" alt="" />
                <div>
                  <h1></h1>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
