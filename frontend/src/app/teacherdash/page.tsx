"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Logo from '../../image/dash-logo.png'
import WhiteLogo from '../../image/white-logo.png'
import Image from 'next/image'
import  {faCircleXmark} from '@fortawesome/free-solid-svg-icons'





const page = () => {
    const [active,setActive]=useState(false)
  return (
    <div className="">
        <div className="container relative w-full ">
        <div className={!active ? "navigation active fixed w-80 h-full bg-[#171a29]" : "navigation fixed w-80 h-full bg-[#171a29]"}>
            <ul className="absolute top-0 left-0 w-full">
                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <Image src={!active ? Logo : WhiteLogo} alt='' className={!active ? 'mt-8 w-16' : 'mt-10 w-44 flex items-center justify-center'}></Image>
                        </span>
                    </a>
                </li>
                <FontAwesomeIcon icon={!active ? faBars : faCircleXmark} className={!active ? 'h-7 ml-5 m-2 cursor-pointer text-[#fff]' : 'close-icon h-7 absolute ml-64 m-2  cursor-pointer text-[#fff]'} onClick={()=>setActive(!active)} />
                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon relative">
                        <FontAwesomeIcon icon={faHouseUser} className='h-7' />
                        </span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faUsers} className='h-7' />                        </span>
                        <span className="title">Customers</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faComment} className='h-7' />
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]" >
                        <span className="icon">
                        <FontAwesomeIcon icon={faCircleQuestion} className='h-7' />
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faSliders} className='h-7' />
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default page
