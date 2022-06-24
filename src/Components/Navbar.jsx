import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDownload} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='w-full bg-primary text-white '>
        <div className="md:w-11/12 mx-auto py-4">
        <div className="flex items-center justify-between">
            <Link to={'/'}><h1 className="text-2xl" style={{fontFamily: 'fruktur'}}><span className='text-secondary'>Ayo</span>bami</h1></Link>
            <ul className="flex items-center justify-between md:gap-4 lg:gap-8 text-slate-300">
                <Link to={'/'} >Home</Link>
                <Link to={'/services'} >Services</Link>
                <Link to={'/portfolio'} >Portfolio</Link>
                <Link to={'/contact'} >Contact</Link>
            </ul>
            <button className='flex items-center gap-2 bg-secondary px-3 py-2'> <AiOutlineDownload /> Download CV</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar