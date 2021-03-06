import Image from 'next/image'
import React from 'react'
import contactImg from '../public/contact.png'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { useState } from 'react'

const Contact = () => {
    
    async function handleOnSubmit(e){
        e.preventDefault()
        const formData ={}
        Array.from(e.currentTarget.elements).forEach(field => {
            if(!field.name) return;
            formData[field.name] = field.value 
        })
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData)
        
    }

  return (
    <div id='Contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#2F9EFD]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            
            <div className='grid lg:grid-cols-5 gap-8 '>
                {/* Left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image src={contactImg} alt="/" className='rounded-xl hover:scale-105 ease-in duration-300'/>
                        </div>
                        <div>
                            <h2 className='py-2'>Arthur Odwor</h2>
                            <p>Front-End Developer</p>
                            <p className='py-4'> I am available for freelance and any part time or full time positions. Contact me at any time and let us talk</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect with me</p>
                            <div className='flex items-center justify-between py-4'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/arthur-oyugi-993b81206/">
                                        <FaLinkedin />
                                    </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href="https://github.com/oyugibear">
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href="mailto:jroyugi@gmail.com">
                                        <AiOutlineMail />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right */}
                {/* <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form onSubmit={handleOnSubmit}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'> Name </label>
                                    <input type="text" name='name' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'> Phone Number </label>
                                    <input type="text" name='number' className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'> Email </label>
                                <input type="email"  name='email'className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'> Subject </label>
                                <input type="text" name='subject' className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'> Message </label>
                                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' name='message' rows='10'/>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div> */}
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'> 
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='m-auto text-[#2F9EFD]' size={15}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact