import React from 'react'
import Clients from '../Components/Clients'
import Experience from '../Components/Experience'
import Header from '../Components/Header'
import Projects from '../Components/Projects'

const Homepage = () => {
  return (
    <div className='bg-primary w-full'>
      <div className="md:w-11/12 mx-auto">
      <Header />
      <Experience />
      <Projects />
      <Clients />
      </div>
    </div>
  )
}

export default Homepage