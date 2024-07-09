'use client'
import Image from "next/image"; 
import Illi from '../../image/signupill.png'
import Logo from '../../image/eduquest.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";




const page = () => {
  const [showPassword,setShowPassword]=useState(false)
  return (
    <div className="container flex items-center justify-center">
<div className="signup-page flex mt-10">
      <div className="left-side  p-4 rounded-xl flex flex-col items-center mt-3">
        <h5 className="font-bold w-72 text-4xl">Become a pro with thousands of corses.</h5>
        <Image src={Illi} alt='' className='w-96'></Image>
      </div>
      <div className="signup-form">
        <div className="title-logo flex items-center mt-2 ml-10">
          <h5 className="text-3xl font-bold">Sign Up With</h5>
          <Image src={Logo} alt='' className="w-36"></Image>
        </div>
        <div className="have-account flex items-center justify-center p-2 bg-[#e1aeff] mt-3 rounded-lg">
          <h5>Already have an account? Log in</h5>
        </div>
        <div className="signup-form ml-10">
          <form className="">
            <div className="choose-role mt-6">
            <h5 className="font-semibold">Are you ? 🤔</h5>
            <div className=" flex gap-5 mt-2 ">
           <input type="radio" name='role' value='student' placeholder="Enter Username"></input>
            <h5 className="font-medium">Student</h5>
           <input type="radio" name='role' value='instructor' placeholder="Enter Username"></input>
           <h5 className="font-medium">Instructor</h5>
            </div>
            </div>  
            <div className="username-password flex mt-3 gap-8">
              <div className="user-name mt-2">
              <h5 className="font-semibold">Username</h5>
              <div className="username-input flex items-center justify-center mt-2 border ">
              <FontAwesomeIcon icon={faUser} className="w-4 ml-1.5" />
              <input type="text" placeholder="Enter Username" className=" w-44 p-2 ml-1.5 outline-none " ></input>
              </div>
              </div>
              <div className="pass mt-2">
              <h5 className="font-semibold">Password</h5>
               <div className="pass-input flex items-center justify-center mt-2 border">
               <FontAwesomeIcon icon={faLock} className="w-4 ml-1.5" />
              <input type="password" placeholder="Enter password" className="w-44 p-2 ml-1.5 outline-none" />
              <FontAwesomeIcon icon={faEyeSlash} className="w-4 mr-2.5" />
               </div>
              </div>
              
            </div>
            <div className="email mt-3">
              <h5 className="font-semibold">Email</h5>
              
              <div className="email-input flex items-center  mt-2 border">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 ml-1.5"/>
              <input type='text' placeholder="exemple@exemple.com" className=" p-2 ml-1.5 outline-none "/>
              </div>
            </div>
            <div className="phone-gendre flex gap-8">
            <div className="phone mt-3">
              <h5 className="font-semibold" >Phone Number</h5>
              <div className="phone-inp flex items-center  mt-2 border">
              <FontAwesomeIcon icon={faMobileScreenButton} className="w-4 ml-1.5" />

              <input type="text" placeholder="+1 123 456 7890" className="p-2 ml-1.5 outline-none" />
              </div>
            </div>
            <div className="gender mt-3">
              <h5 className="font-semibold">Gender</h5>
              <select className=" border p-2 mt-2.5 w-44 outline-[#a200ff]">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            </div>
            <div className="submit-btn mt-7 flex items-center justify-center">
              <button type="submit" className="bg-[#a200ff] px-10 py-2 text-[#fff] font-semibold rounded-md">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    
  
  )
}

export default page