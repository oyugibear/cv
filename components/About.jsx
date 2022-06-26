import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='About' className='w-full md:h-screen flex items-center justify-center py-16 px-4'>
        <div className='max-w-[1240px] md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#2F9EFD]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I Am
                </h2>
                <p className='py-2 text-gray-600'>
                    Hard working | Motivated | Team Player | Problem Solver
                </p>
                <p className='py-2 text-gray-600 m:max-w-[70%] m-auto'>
                    As a 20 year old newly graduated software developer, I have a passion for building beautiful, responsive websites and web applications. 
                    This entire journey started while i was procasting on Youtube and happend to come across a video that i thought was a good idea.
                    I was intrigued and decided to learn how to code and build a website from the ground up. But, I quickly realized that I had to start 
                    from UI/ UX design and not just coding; as i needed to understand what makes a good website.  Therefore, I took two years learning about 
                    UI/ UX design and then moved on to learning how to code; which i believe is the perfect way to start a career in software development..
                </p>
            </div>
            <div className=' w-[300px] h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 t-[20px] px-4 mt-16'>
                <Image src='/../public/assets/images/about.jpg' alt='about' width={300} height={300} className='rounded-xl'/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default About