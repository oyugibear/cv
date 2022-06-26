import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase tracking-widest text-gray-600'>
                    Change the world one line of code at a time.
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I am <span className='text-[#2F9EFD]'>Arthur</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                    I am a full-stack web developer with a passion for building beautiful, responsive websites. 
                    I started this journey as a UI/UX designer and gradully evolved into a front-end developer. 
                    The software skills i learned along the way have made me a valuable asset to any team, and 
                    taught me how to promote and uplift any business/ team that I work with.
                </p>
                <div className='flex items-center justify-between max-w-[330px] mx-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main