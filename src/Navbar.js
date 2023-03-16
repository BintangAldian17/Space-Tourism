import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './assets/home/logo-home.png'
import DataNavbar from './data.json'
import Hamburger from './assets/home/hamburger-home.svg'
import CloseMenu from './assets/home/close-menu.svg'

const Navbar = () => {
    const [Title] = useState(DataNavbar)
    const NavData = Title.DataNavbar
    const [show, setShow] = useState(false)

    const handleOnClick = () => {
        setShow(!show)
    }


    return (
        <header className=' w-full  fixed top-6 md:top-0 lg:top-9 lg:h-20 flex items-center lg:pl-14 justify-between px-6 lg:px-0 md:pr-0 md:pl-9'>
            {/* logo */}
            <div>
                <NavLink to='/'>
                    <img src={Logo} alt='logo' className=' lg:w-[48px] lg:h-[48px] w-[43px] h-[43px] md:w-[48px] md:h-[48px]' />
                </NavLink>
            </div>
            {/* Hamburger */}
            {
                !show ?
                    <div className=' md:hidden'>
                        <img src={Hamburger} alt='hamburger' width={27} height={24}
                            onClick={handleOnClick}
                        />
                    </div>

                    :
                    <div div className=' absolute top-2 right-6 z-50 '>
                        <img src={CloseMenu} alt='closemenu' width={29} height={29}
                            onClick={handleOnClick}
                        />
                    </div>
            }


            {/* large screen navbar */}
            <nav className=' hidden lg:block'>
                <ul className='flex flex-row bg-white/[0.04] backdrop-blur-lg gap-x-10 h-20 text-white shadow-lg px-28 items-center'>
                    {
                        NavData.map((item, index) => {
                            return (
                                <li key={index} className='font-normal text-nav-text h-20  uppercase tracking-[2.7px] flex items-center'>
                                    <NavLink to={item.path}
                                        className={({ isActive }) =>
                                            isActive ? " border-b-4 flex h-20 gap-x-2 items-center text-nav-text  uppercase tracking-[2.7px] transition-all ease-in-out" : "font-normal text-nav-text h-20 gap-x-2  uppercase tracking-[2.7px] flex items-center"
                                        }
                                    ><span className='font-bold '>{item.number}</span> {item.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>



            {/* tablet */}
            <nav className=' hidden lg:hidden md:block'>
                <ul className='flex flex-row bg-white/[0.04] backdrop-blur-lg gap-x-7  h-[100px] text-white shadow-lg px-8 items-center'>
                    {
                        NavData.map((item, index) => {
                            return (
                                <li key={index} className='h-[100px]  flex items-center'>
                                    <NavLink to={item.path}
                                        className={({ isActive }) =>
                                            isActive ? " border-b-4 flex h-[100px] gap-x-1 items-center text-[13px]  uppercase tracking-[2px] transition-all ease-in-out" : "font-normal text-[13px] h-[100px] gap-x-2  uppercase tracking-[2.7px] flex items-center"
                                        }
                                    > {item.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>



            {/* mobile screen Navbar */}
            {
                show && (
                    <nav className='  absolute -top-6 w-[39vh] right-0 h-screen transition-all ease-in-out duration-300'>

                        <ul className='flex  flex-col bg-white/[0.04] backdrop-blur-lg  text-white shadow-lg pl-10 w-full h-screen pt-24 gap-y-5'>
                            {
                                NavData.map((item, index) => {
                                    return (
                                        <li key={index} className='font-normal uppercase tracking-[2.7px] flex items-center h-12'>
                                            <NavLink to={item.path}
                                                onClick={handleOnClick}
                                                className={({ isActive }) =>
                                                    isActive ? " border-b flex h-10 gap-x-2 items-center text-[14px]  uppercase tracking-[2.7px] transition-all ease-in-out" : "font-normal text-[14px] h-12 gap-x-2  uppercase tracking-[2.7px] flex items-center"
                                                }
                                            ><span className='font-bold '>{item.number}</span> {item.title}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                )
            }

        </header>
    )
}

export default Navbar