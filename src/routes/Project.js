import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCards from '../components/PricingCards'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects." text="Some of my recent work" />
      <Work/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project