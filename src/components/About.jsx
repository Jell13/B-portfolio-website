import hardware from '../assets/hardware.jpg'
import bred from '../assets/bredboard.jpg'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#FDFDFD] text-black'>
      <div className='max-w-screen-lg mx-auto w-full h-full flex flex-col justify-center items-center p-4'>
        <div className='flex flex-col items-center sm:flex-row sm:gap-4'>
            <img className='w-[400px] sm:w-3/5' src={bred} alt="" />
            <div className='sm:ml-[-85px] sm:mt-14 bg-white p-4'>
                <h1 className='font-bold text-4xl border-b-4 border-black inline '>About me</h1>
                <p className=' mt-8 text-xl'>This is where you will specify about yourself more like hobbies and crap</p>
                <br />
                <p className='text-xl'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vitae veritatis illum explicabo repudiandae nam soluta laboriosam delectus, temporibus odit sed dolores assumenda ullam quidem officiis magnam culpa esse ipsum!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
