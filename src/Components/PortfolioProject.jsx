import React from 'react'

const PortfolioProject = ({item}) => {
  return (
    <div className= 'flex flex-col md:flex-row items-stretch gap-8 mb-8'>
        <img src={item.img} alt="" className='w-1/2 border-gray border-2 cursor-pointer' />
        <div className='w-1/2'>
            <h3 className="text-lg text-bold text-gray-200">{item.title.length < 40 ? item.title : `${item.title.substring(0, 39)}...` }</h3>
            <p className='text-gray-400 text-sm mt-4'>{item.subtitle.length < 135 ? item.subtitle : `${item.subtitle.substring(0, 134)}...` }</p>
        </div>
    </div>
  )
}

export default PortfolioProject