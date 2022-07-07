import React from 'react'
import { Link } from 'react-router-dom'
import project1 from '../Assets/ui/portfolio9.png'
import PortfolioProject from '../Components/PortfolioProject'
import { portfolio, data } from '../data'

const Portfolio = () => {
    const title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur pariatur maxime ipsum fugiat beatae officia et ut velit ullam?'
    return (
        <div className='w-full bg-primary text-gray'>
          <div className="w-11/12 mx-auto pt-12 pb-8">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:basis-1/2">
                <Link to={'/portfolio/real-estate'}>
                <img src={project1} alt="" className='border-gray border-2' />
                <h3 className="text-2xl text-bold my-4 text-white">Real Estate Web App</h3>
                <p className='text-gray-400'>The latest real estate web application built with Nextjs, Reactjs, Chakra UI and RapidAPI. In the beginning, series of meeting were held in order to choose the best architectural patterns. Careful consideration were given to the monolithic and microservice architecture. After which I swung into action using the agile methodology and Jira was used. Read more about the challenges i faced in this project and how i resolved them adopting agile sprint strategy.</p>
                </Link>
              </div>
              <div className="md:basis-1/2">
                {
                    portfolio?.developer.slice(1, 5).map((item, i) => (
                      <Link to={`${item.link}`} key={i} className='cursor-pointer'>
                           <PortfolioProject item={item} />
                        </Link>
                    )
                    )
                }
              </div>
            </div>
            <h1 className="text-4xl text-bold mt-16 text-gray-100 mb-8">Other <span className="text-secondary">Products </span> in progress</h1>
              <div className="flex gap-12">
                {
                    portfolio.qa.map((items, i) => (
                        <div>
                            <img src={items.img} alt="" className='w-full' key={{i}} />
                            <h1 className="text-xl mt-4 text-gray-200">{items.title}</h1>
                            <p className='text-gray-400 mt-4 text-gray-400'>{items.subtitle.length < 90 ? items.subtitle : `${items.subtitle.substring(0, 89)}...` }</p>
                        </div>
                    ))
                }
              </div>
          </div>
        </div>
      )
}

export default Portfolio