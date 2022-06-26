import Image from 'next/image'
import React from 'react'
import jipendeImg from '../public/assets/projects/jipende.png'

const jipende = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
          {/* <Image src={jipendeImg} alt='/' className='absolute z-1' layout='fill' objectFit='cover'/> */}
          <div className='top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-15 p-2'>
            <h2 className='py-2 '>Africa Jipende Wellness</h2>
            <h3>Wordpress / Elementor</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default jipende