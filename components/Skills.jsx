import Image from 'next/image'
import React from 'react'
import cssImg from '../public/assets/skills/css.png'
import htmlImg from '../public/assets/skills/html.png'
import jsImg from '../public/assets/skills/javascript.png'
import nextImg from '../public/assets/skills/nextjs.png'
import reactImg from '../public/assets/skills/react.png'
import nodeImg from '../public/assets/skills/node.png'
import mongoImg from '../public/assets/skills/mongo.png'
import firebaseImg from '../public/assets/skills/firebase.png'
import githubImg from '../public/assets/skills/github1.png'
import shopifyImg from '../public/assets/skills/shopify.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import wordpressImg from '../public/assets/skills/wordpress.png'


const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#2F9EFD] py-4'>
                Skills
            </p>
            <h2 className=''>
                What I Can Do
            </h2>
            <div className='grid grid-col-2 lg:grid-cols-4 gap-8 pt-9'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={htmlImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>HTML</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={cssImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>CSS</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={jsImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>JavaScript</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nodeImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>Node</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={reactImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>React</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>NextJs</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwindImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>Tailwind</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mongoImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>Mongo</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={firebaseImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>Firebase</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={githubImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>Github</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={shopifyImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>Shopify</h3>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={wordpressImg} alt='/' width='64px' height='64px'/>
                        </div>
                        <h3 className='flex flex-col justify-center items-center'>Wordpress</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills