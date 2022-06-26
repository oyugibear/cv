import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import jipendeImg from '../public/assets/projects/jipende.png'
import emiliaImg from '../public/assets/projects/emilia.png'
import fasiniiImg from '../public/assets/projects/fasinii.png'
import halImg from '../public/assets/projects/hal.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='Projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#2F9EFD]'>Projcets</p>
            <h2 className='py-4'>What I Have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title='Jipende' backgroundImg={jipendeImg} projectURL='/jipende' build='Wordpress'/>
                <ProjectItem title='Emilia' backgroundImg={emiliaImg} projectURL='/emilia' build='Nextjs'/>
                <ProjectItem title='Fasinii' backgroundImg={fasiniiImg} projectURL='/fasinii' build='Nextjs'/>
                <ProjectItem title='Hal-Group' backgroundImg={halImg} projectURL='/hal' build='UI / UX'/>

            </div>
        </div>
    </div>
  )
}

export default Projects