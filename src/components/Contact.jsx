import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-slate-800 p-4 mb-0 text-white'>
       <div className='flex flex-col pt-28 pb-4 px-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit this form below to get in touch with me <br />
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
                className='p-2 bg-transparent border-2 text-white focus:outline-none'
                />
                <input type="text" 
                name='email' 
                placeholder='Enter your email' 
                className='my-4 p-2 bg-transparent border-2 text-white focus:outline-none'
                />
                <textarea 
                name="message" 
                placeholder='Enter your message'
                rows="10" 
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                <button className='text-white bg-gradient-to-b from-lime-500 to-cyan-800 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
       </div>
    </div>
  )
}

export default Contact
