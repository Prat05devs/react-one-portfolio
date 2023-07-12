import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-slate-800 to-black text-white'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
        Welcome to my portfolio website! I'm Prateek, a passionate full-stack web developer based in Dehradun, India. I recently completed a rigorous 6-month internship in full-stack website development, where I gained valuable hands-on experience in building dynamic and responsive web applications. With my newly acquired skills, I am thrilled to showcase my exciting projects on this website.
        </p>

        <br />

        <p className='text-xl'>
        Coding is not just a profession for me; it's a true passion. I find immense joy in solving complex problems and creating intuitive user experiences through code. This portfolio serves as a platform for recruiters to explore my work and get a glimpse of my technical abilities. I have also provided a direct download of my resume, making it convenient for recruiters to access all the necessary information in one place. I'm excited to share my journey and demonstrate my growth as a developer through the projects I have built. Thank you for visiting my portfolio website, and I look forward to connecting with you!
        </p>
      </div>

    </div>
  )
}

export default About
