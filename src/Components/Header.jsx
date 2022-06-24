import React from 'react'
import {SiBlockchaindotcom,  SiEthereum, SiNextdotjs} from 'react-icons/si'

const Header = () => {
  return (
    <div className=' text-slate-100 w-full'>
      <div className="flex flex-col md:flex-row items-center py-20">
        <div className="md:basis-2/5">
        <h5 className='small-font'>FRONT & <br className='hidden md:block' /> BACKEND DEVELOPER</h5>
        <h2 className="text-2xl text-white font-semibold pt-8">FULLSTACK & <br /> BLOCKCHAIN DEVELOPER</h2>
        <p className='text-slate-400 pt-2 pb-8 small-font'>A goal oriented software developer with more than five years of experience developing highly scalable, mobile responsive, and robust enterprise web applications.</p>
        <div className="border border-slate-300 md:w-1/2 lg:w-1/2 flex items-center justify-between gap-2 rounded-lg p-1 ">
          <SiBlockchaindotcom />
          <SiEthereum />
          <SiNextdotjs />
          <button className='bg-secondary px-8 py-2 rounded-xl'>Contact Me</button>
        </div>
        </div>
        <div className="md:basis-3/5"></div>
      </div>
        
    </div>
  )
}

export default Header