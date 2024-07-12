"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Logo from '../../image/dash-logo.png'
import WhiteLogo from '../../image/white-logo.png'
import Image from 'next/image'
import  {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Home from './home'
import Students from './Students'
import Profile from '../studentdash/ProfileCard'
import UpdateCourse from './updateCorse'
import AddCorse from './addCourse'

const page = () => {
    const [active,setActive]=useState(false)
    const [navigation,setNavigation]=useState('home')
    
    
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
                <li className="relative w-full" onClick={()=>setNavigation('home')}>
                    <Link href="/teacherdash" className="relative block w-full text-[#fff]">
                        <span className="icon relative">
                        <FontAwesomeIcon icon={faHouseUser} className='h-7' />
                        </span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>

                <li className="relative w-full " onClick={()=>setNavigation('students')}>
                    <Link href="" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faUsers} className='h-7' />                        </span>
                        <span className="title">Students</span>
                    </Link>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]" onClick={()=>setNavigation('addcourse')}>
                        <span className="icon">
                        <FontAwesomeIcon icon={faCirclePlus} className='h-7' />
                        </span>
                        <span className="title">Add course</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]" onClick={()=>setNavigation('updatecourse')} >
                        <span className="icon">
                        <FontAwesomeIcon icon={faPenToSquare} className='h-7' />
                        </span>
                        <span className="title">Update course</span>
                    </a>
                </li>

                <li className="relative w-full" onClick={()=>setNavigation('settings')}>
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faTrash}  className='h-7' />
                        </span>
                        <span className="title">Delete course</span>
                    </a>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className='h-7' />
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
    <div className="profile-card absolute ">
        <Profile/>
        </div>
    {navigation === 'home' && <Home active={active} />}
    {navigation === 'students' && <Students active={active} />}
    {navigation === 'addcourse' && <AddCorse active={active} />}
    {navigation === 'updatecourse' && <UpdateCourse active={active} />}
    </div>
  )
}

export default page