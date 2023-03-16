import React from 'react'
import HomeButton from '../assets/home/home-button.png'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <section className=' lg:bg-home-desktop sm:bg-home-tablet bg-home-mobile h-screen bg-cover'>
      <article className='h-screen w-screen flex lg:justify-between lg:flex-row flex-col items-center md:px-32 lg:text-start px-[20px] lg:pt-32 pt-[120px] md:pt-[200px] text-center'>
        <div className='lg:w-[50%]'>
          <h2 className=' font-second font-light lg:text-h5 md:text-[20px] text-violet'>
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className='text-white font-main text-[80px] md:text-h1'>
            SPACE
          </h1>
          <p className=' lg:text-[18px] text-violet lg:w-[74%] lg:leading-8 leading-7 font-light text-[15px] pt-2 md:pt-0 lg:px-0 md:px-[37px]'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className=' md:pt-24 pt-16 lg:pr-11'>
          <NavLink to="/destination">
            <img src={HomeButton} alt='homebutton' className=' rounded-full lg:w-[274px] lg:h-[274px] w-[150px] h-[150px]  md:w-[200px] md:h-[200px] animate-pulse duration-[1.5s] hover:animate-none hover:shadow-[0_0_0_35px_rgba(255,255,255,0.2)]' />
          </NavLink>
        </div>
      </article>
    </section>

  )
}
