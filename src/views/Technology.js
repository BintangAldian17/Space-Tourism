import React, { useState } from 'react'
import data from '../data.json'

export const Technology = () => {
    const space = data.technology
    const [value, setValue] = useState(0)

    const { name, images, description } =
        space[value]


    return (
        <section className=' bg-technology bg-cover h-screen'>
            <div className=' lg:pt-48 lg:pl-32 lg:grid lg:grid-rows-7 grid-flow-col h-full flex flex-col md:pt-36 lg:gap-y-0 md:gap-y-14  gap-y-8 text-center pt-[85px] md:text-start'>
                <div className=' lg:col-span-2 row-span-1 md:ml-8 lg:ml-0'>
                    <h2 className=' lg:text-[26px] md:text-[20px] text-[16px] tracking-widest text-white uppercase ml-2 lg:row-span-2'>
                        <span className=' lg:text-[26px] md:text-[20px] text-[16px] tracking-widest text-white/25 mr-6 font-bold'>03</span>SPACE LAUNCH 101
                    </h2>
                </div>
                <div className=' lg:row-span-2 lg:col-span-1 order-last lg:order-none md:flex md:flex-col text-center lg:text-start lg:pt-20'>
                    <div className=' lg:flex gap-x-24'>
                        <div className=' flex lg:flex-col lg:gap-y-7 md:gap-x-4 gap-x-2 justify-center'>
                            {
                                space.map((item, index) => {
                                    return (
                                        <button key={index} onClick={() => setValue(index)}
                                            className={` transition-all ease-out md:text-h5 md:w-[70px] md:h-[70px] w-8 h-8 rounded-full border border-white/50 text-white hover:border-white text-[14px] ${index === value && 'bg-white text-black'} `}
                                        >
                                            {index + 1}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className=' md:pt-10 lg:pt-0 pt-5'>
                            <h2 className=' text-violet md:text-nav-text text-[15px]'>
                                THE TERMINOLOGY…
                            </h2>
                            <h1 className=' lg:text-h3 md:text-[40px] text-[24px] text-white font-main uppercase'>
                                {name}
                            </h1>
                            <p className=' text-violet lg:w-[75%] leading-7 md:px-40 lg:px-0 md:text-[16px] text-[15px]'>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' lg:ml-auto lg:pt-9 lg:row-span-6 lg:w-max lg:h-max'>
                    <img src={images.portrait} alt={name} className=' md:h-[310px] h-[170px] lg:h-auto w-full object-cover' />
                </div>
            </div>
        </section>

    )
}
