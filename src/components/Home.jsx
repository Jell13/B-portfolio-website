import { FaLinkedin } from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Navbar from './Navbar'
import profile from '../assets/profile.png'

const Home = () => {

  const links = [
    {
      id:1,
      element: <FaLinkedin size={30}/>,

    },
    {
      id:2,
      element: <BsFillPersonLinesFill size={30}/>
    }
  ]



  return (
    <div name="home" className='w-full h-screen bg-power bg-cover bg-center bg-fixed text-white'>
      <div className='w-full h-full flex flex-col'>
        <div className='max-w-screen-lg mt-20  mx-auto h-full flex flex-col md:flex-row gap-1 justify-center items-center '>
          <div className=' flex flex-col gap-4 justify-center h-1/2'>
            <h1 className='text-4xl md:text-7xl font-bold'>Electrical Engineering</h1>
            <p className='max-w-md text-3xl'>Bryan Sugiharto</p>
            <div className="flex gap-4">
              {links.map(({id, element}) => (<a key={id}>{element}</a>))}
            </div>
          </div>
          <div>
            <img className='rounded-2xl mx-auto md:w-4/5 mb-[20px] w-2/3' src={profile} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
