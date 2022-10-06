import React from 'react'
import Morph from '../assets/Morph.jfif'
import C200 from '../assets/200OK.jpg'
import Gamersup from '../assets/gamersup.jpg'
import { FaGithub } from 'react-icons/fa'

const Work = () => {
    return (
        <div name='work' className='w-full bg-[#0a192f] md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                    <p className='py-6 font-bold text-gray-200'>Here is some projects, and there are more in my &nbsp;
                     <a href="https://github.com/TungYuChen" className='text-2xl'>GitHub</a></p>
                </div>
                {/* Container */}
                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Gamersup})` }} className='shadow-lg shadow-[$040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <p className='text-xl font-bold text-white tracking-wider px-2'>
                                Built by Java, Spring Boot, Spring Security, ReactJS, NodeJs, MySQL, JWT
                            </p>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/TungYuChen/GamersUp" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Morph})` }} className='shadow-lg shadow-[$040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <p className='text-xl font-bold text-white tracking-wider px-2'>
                                Build in Java, Spring MVC, JSP and deploy on Heroku
                            </p>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/TungYuChen/ProjectMorph" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                                <a href="https://projectmorph.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${C200})` }} className='shadow-lg shadow-[$040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <p className='text-xl font-bold text-white tracking-wider px-2'>
                                Build in C#, WPF, EntityFramework, .NET framework
                            </p>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/TungYuChen/FP200OK01" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work