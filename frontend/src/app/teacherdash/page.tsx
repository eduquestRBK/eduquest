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
import Image from 'next/image'





const page = () => {
    const [active,setActive]=useState(false)
  return (
    <div className="">
        <div className="container relative w-full ">
        <div className={!active ? "navigation active fixed w-80 h-full bg-[#a200ff]" : "navigation fixed w-80 h-full bg-[#a200ff]"}>
            <ul className="absolute top-0 left-0 w-full">
                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <Image src={Logo} alt='' className='mt-5'></Image>
                        </span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon relative">
                        <FontAwesomeIcon icon={faHouseUser} className='h-9' />
                        </span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faUsers} className='h-9' />                        </span>
                        <span className="title">Customers</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faComment} className='h-9' />
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]" >
                        <span className="icon">
                        <FontAwesomeIcon icon={faCircleQuestion} className='h-9' />
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faSliders} className='h-9' />
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
    <FontAwesomeIcon icon={faBars} className='h-8 ml-96 cursor-pointer' onClick={()=>setActive(!active)} />
    </div>
  )
}

export default page
