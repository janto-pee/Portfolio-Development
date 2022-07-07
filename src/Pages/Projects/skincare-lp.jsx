import React from 'react'
import skincare from "../../Assets/ui/skincareLP.png"

const Skincare = () => {
  return (
    <div>
      <div className="py-24 bg-primary text-center relative">
            <h1 className="text-2xl md:text-4xl font-semibold text-white md:w-2/3 mx-auto mb-20">How i built a <span className='text-secondary'>Real Estate</span> Web Application with Nextjs, Chakra UI, and RapidAPI</h1>
            <a href='' className='cursor-hover'>
                <div className="relative">
                    <img src={skincare} alt="" className='w-1/2 mx-auto left-full rounded-lg' />
                    <h3 className="text-md text-white">Please click to see live site</h3>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Skincare