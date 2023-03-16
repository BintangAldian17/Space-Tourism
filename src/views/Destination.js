import React, { useState } from 'react'

import data from '../data.json'



export const Destination = () => {
    const planets = data.destinations
    const [value, setValue] = useState(0)

    const { name, images, description, distance, travel } =
        planets[value]




    return (

        <section className=' bg-destination bg-cover h-screen'>
            <div className=' h-full lg:mx-36 md:mx-10 mx-5'>
                <div className='w-full lg:pt-40 h-full flex lg:flex-row flex-col transition-all ease-in-out items-center pt-[100px] md:pt-36'>
                    <div className=' flex flex-col lg:gap-y-16 lg:w-1/2 lg:pr-14 md:w-full md:gap-y-5 '>
                        <h1 className='lg:text-[26px] text-[15px] tracking-[2.7px] text-white uppercase lg:ml-2 '>
                            <span className='lg:text-[26px] text-[15px] lg:tracking-widest text-white/25 lg:mr-6 mr-3 font-bold'>
                                01
                            </span>
                            Pick your destination
                        </h1>
                        <div className=' lg:ml-auto mx-auto mt-8 lg:mt-0'>
                            <img src={images.png} alt={name} className='shadow lg:w-[430px] lg:h-[430px] w-[150px] h-[150px] md:w-[300px] md:h-[300px]' />
                        </div>
                    </div>

                    <div className=' lg:w-1/2 lg:pt-[68px] lg:pl-28 flex flex-col items-center text-center  mt-4 md:mx-[70px] lg:mx-0'>
                        <div className=' flex flex-row lg:gap-x-7 gap-x-4 text-violet h-12 lg:mb-5'>
                            {
                                planets.map((item, index) => {
                                    return (

                                        <button key={index} onClick={() => setValue(index)}
                                            className={` md:hover:border-b-[4px] md:hover:border-white/50 md:hover:pt-1 transition-all ease-out duration-75 uppercase ${index === value && 'text-white md:border-b-[4px] md:pt-1 border-white'}`}>
                                            {item.name}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div className=' border-b lg:pb-12 pb-4 border-[#383B4B]  md:pb-10 md:pt-10 lg:pt-0'>
                            <h1 className=' lg:text-h2 text-h3 text-white font-main uppercase'>
                                {name}
                            </h1>
                            <p className=' text-violet lg:leading-8 leading-6 lg:text-[17px] text-[14px] font-light lg:h-[122px]'>
                                {description}
                            </p>
                        </div>
                        <div className=' lg:pt-5 pt-2 flex md:flex-row flex-col lg:gap-x-16 lg:gap-y-7 gap-y-2 md:pt-10 md:gap-x-24 '>
                            <div className=' flex items-center flex-col lg:block'>
                                <p className=' text-violet text-[14px] font-normal mb-3'>
                                    AVG. DISTANCE
                                </p>
                                <h1 className=' font-main text-h5 text-white uppercase leading-8'>
                                    {distance}
                                </h1>
                            </div>
                            <div className=' flex items-center flex-col lg:block'>
                                <p className=' text-violet text-[14px] font-normal mb-3 uppercase'>
                                    Est. travel time
                                </p>
                                <h1 className=' font-main text-h5 text-white uppercase leading-8'>
                                    {travel}
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>

    )
}


