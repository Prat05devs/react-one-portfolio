import React from 'react'
import HeroImage from '../assets/heroImage.jpeg'
import {TiArrowRightOutline} from 'react-icons/ti'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
             from-black via-black to-slate-800'>
      
      <div className='mav-v-screen-lg mx-auto flex flex-col
             items-center justify-center h-full px-4 md:flex-row'>
        
        <div className='text-center lg:text-left lg:w-1/2 lg:ml-20 '>
            
            <h2 className='text-4xl sm:text-7xl mt-48 sm:mt-0 font-bold text-white'>
                I'm a Full Stack Developer</h2>
                <p className='text-slate-400 py-4 max-w-md'>
                    I am building and designing some awesome projects to 
                    showcase my skills in WebsiteDevelopment.
                    I will be using web application technologies like :-
                    react JS, tailwind CSS, node etc.
                    Stay tuned !! 
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center
                     rounded-md bg-gradient-to-r from-green-700 to-cyan-700 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <TiArrowRightOutline size={20} className='ml-1.5'/>
                        </span>
                    </Link>
                </div>
        </div>
        <div>
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto lg:w-1/2 md:w-full ' />
        </div>
      </div>
    </div>
  )
}

export default Home
