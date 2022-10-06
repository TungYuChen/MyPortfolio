import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-bold'>
                        <p>Hi, I am Tung Yu Chen, Nice to meet you.<br /> Please take a look around.</p>
                    </div>
                    <div>
                        <p className='font-bold text-gray-200'>
                            I was a semiconductor engineer for more than 3 years, however, I decided to do adventure after few years employed.<br />
                            After carefully planning, I chose to come to Canada and study computer science.<br />
                             Now I finished my program and trying to 
                            start a new career in Canada. I would say I am a self-motivatiion, task-oriented and stable person.
                        </p>
                    </div>                
            </div>
        </div>        
    </div>
  )
}

export default About