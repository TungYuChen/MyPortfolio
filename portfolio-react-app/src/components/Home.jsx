import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='bg-[#0a192f] w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p> <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tung Yu Chen</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>sdkfhjsdklfjsdkfl</p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-4xl duration-300'>                    
                        View Work <HiArrowNarrowRight className='ml-3'/>                    
                </button>
            </div>
        </div>
       

    </div>
  )
}

export default Home