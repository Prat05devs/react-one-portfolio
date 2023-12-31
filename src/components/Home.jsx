import React from 'react'
import HeroImage from '../assets/heroImage.jpeg'
import {TiArrowRightOutline} from 'react-icons/ti'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black via-slate-800 to-cyan-500'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col
             items-center justify-center h-full px-4 md:flex-row'>
        
        <div className='flex flex-col justify-center h-full '>
            
            <h2 className='text-4xl sm:text-7xl mt-7 sm:mt-0 font-bold text-white'>
                I'm a Full Stack Developer</h2>
                <p className='text-white py-4 max-w-md'>
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
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-2/3 ' />
        </div>
      </div>
    </div>
  )
}

export default Home
