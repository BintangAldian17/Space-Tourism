import React, { useState } from 'react'
import data from '../data.json'


export const Crew = () => {
    const peapole = data.crew
    const [value, setValue] = useState(0)

    const { name, images, role, bio } =
        peapole[value]


    return (
        <section className=' bg-crew bg-cover h-screen'>
            <div className=' w-full h-full lg:pl-28 lg:pt-0 md:pt-32 pt-[100px] lg:grid lg:grid-rows-3 lg:grid-flow-row lg:grid-cols-2 flex flex-col px-5 items-center md:px-10' >
                <div className=' col-span-2 row-span-3 lg:pt-24 md:w-full'>
                    <h2 className=' lg:text-[26px] tracking-widest text-white uppercase ml-2'>
                        <span className=' lg:text-[26px] tracking-widest text-white/25 mr-6 font-bold'>02</span>Meet your crew
                    </h2>
                </div>
                <div className=' w-full lg:h-full h-auto  flex lg:gap-x-4 flex-col-reverse lg:flex-row lg:pb-0 lg:pt-0 md:pt-24  row-span-3 col-span-1 order-last lg:order-none '>
                    <div className=' lg:pt-12  flex md:flex-col flex-col-reverse lg:gap-7 text-center lg:text-start gap-y-7'>
                        <div className=' lg:h-96 lg:pt-4'>
                            <h2 className=' uppercase font-main text-white/25 lg:text-h4 md:text-[24px] text-[17px]'>
                                {role}
                            </h2>
                            <h1 className=' uppercase text-white lg:text-h3 md:text-[40px] text-[24px] font-main lg:mb-8'>
                                {name}
                            </h1>
                            <p className=' text-violet leading-8 lg:text-[17px] text-[15px] md:text-nav-text lg:w-[75%] md:mx-[98px] lg:mx-0'>
                                {bio}
                            </p>
                        </div>
                        <div className=' border-t border-white/30 md:border-t-0'>
                            <div className='lg:flex inline-flex gap-x-4 mt-7 lg:items-end'>
                                {
                                    peapole.map((item, index) => {
                                        return (

                                            <button key={index} onClick={() => setValue(index)} className={` transition-all ease-out w-4 h-4 rounded-full bg-white/25 hover:bg-white/50 ${index === value && 'bg-white'}`}>
                                            </button>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>

                <div className=' mx-auto lg:row-span-3 lg:mx-0 md:mt-auto pt-5 md:order-last lg:order-none'>
                    <img src={images.webp} alt={name} className=' lg:h-[550px] md:h-[450px] h-[222px] shadow ' />
                </div>

            </div>
        </section>

    )
}
