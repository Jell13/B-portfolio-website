import gwc from '../assets/goldenwest.png'
import pomona from '../assets/pomona.jpg'

const Education = () => {
  return (
    <div name="education" className=' w-full bg-[#FDFDFD]'>
      <div className='max-w-screen-lg mx-auto w-full h-full flex items-center p-4'>
        <div className='p-4'>
          <div className='flex flex-col gap-8'>
            <div className=' mt-36 sm:mt-0'>
              <h1 className='text-4xl font-bold border-b-4 border-black inline '>Education</h1>
            </div>
            <div className='mt-12 w-full flex flex-col md:flex-row items-center justify-center gap-8'>
              <img className='w-40 sm:w-60' src={pomona} alt="" />
              <div className='flex flex-col gap-8'>
                <h1 className='text-xl font-bold \'>CalPoly Pomona</h1>
                <p>explain ur experience and what u did in Pomona 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius accusamus itaque ipsa magni culpa, asperiores libero placeat. Nemo architecto iste commodi qui, pariatur dolorem hic odio molestiae suscipit quidem?
                </p>
              </div>
            </div>
            <div className='mt-12 w-full flex flex-col md:flex-row-reverse items-center justify-center gap-8'>
              <img className='w-40 sm:w-60' src={gwc} alt="" />
              <div className='flex flex-col gap-8'>
                <h1 className='text-xl font-bold'>Golden West College</h1>
                <p>explain ur experience and what u did in GWC
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius accusamus itaque ipsa magni culpa, asperiores libero placeat. Nemo architecto iste commodi qui, pariatur dolorem hic odio molestiae suscipit quidem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
