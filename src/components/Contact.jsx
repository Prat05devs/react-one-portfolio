import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-cyan-500 via-cyan-200 to-amber-500 p-4 text-white'>
       <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-black'>Contact</p>
            <p className='py-4'>Submit this form below to get in touch with me <br />
            Let's create Some awesome stuff !!!
            </p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/b0ca7940-1cbb-4e8d-85b3-da4b8db01da8" 
                method='POST'
                className='flex flex-col w-full md:w-1/2'>
                <input type="text" 
                name='name' 
                placeholder='Enter your name' 
                className='p-2 bg-transparent border-2 border-black text-white focus:outline-none'
                />
                <input type="text" 
                name='email' 
                placeholder='Enter your email' 
                className='my-3 p-2 bg-transparent border-2 border-black text-white focus:outline-none'
                />
                <textarea 
                name="message" 
                placeholder='Enter your message'
                rows="10" 
                className='p-2 bg-transparent border-2 border-black rounded-md text-white focus:outline-none'></textarea>

                <button className='text-white bg-gradient-to-b from-lime-500 to-cyan-800 px-6 py-2 my-6 flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
       </div>
    </div>
  )
}

export default Contact
