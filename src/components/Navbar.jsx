import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {


    const [nav, setNav] = useState(false)
    const navs = [
        {
            id:'1',
            name: 'home',
        },
        {
            id:'2',
            name: 'about',
        },
        {
            id:'3',
            name: 'education',
        },
        {
            id:'4',
            name: 'experience',
        },
        {
            id:'5',
            name: 'contact',
        }
    ]
  return (
    <div className=' flex fixed bg-[#273854] bg-opacity-100 w-full h-20 p-8 justify-between items-center text-gray-300'>
      <h1 className='text-4xl font-bold font-signature'>Bryan</h1>
            <ul className='hidden md:flex gap-8'>
                {navs.map(({id, name}) => (<li className=' capitalize hover:scale-125 duration-300 cursor-pointer' key={id}><Link to={name} smooth duration={500}>{name}</Link></li>))}
            </ul>
            <div className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden' onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
            {nav && (
                <ul className='flex gap-8 absolute flex-col justify-center left-0 top-0 items-center w-full h-screen bg-black text-gray-300'>
                    {navs.map(({id,name}) => (<li className='capitalize cursor-pointer text-4xl hover:scale-150 duration-300' key={id}><Link onClick={() => (setNav(!nav))} to={name} smooth duration={500}>{name}</Link></li>))}
                </ul>
            )}
    </div>
  )
}

export default Navbar
