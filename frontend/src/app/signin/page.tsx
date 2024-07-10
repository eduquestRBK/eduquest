'use client'
import Image from "next/image"
import signinPhoto from "../../image/make-a-logo-online.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import axios from "axios"
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function signin(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Error, setError] = useState('');
  const [roles,setRole]=useState('')
  const route =useRouter()


  async function handleSubmit() {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/authentication/login', {
        email,
        password
      });
      route.push('/')
      console.log(response.data);
      const { token, role} = response.data;
      localStorage.setItem('token', token);
      
      if (role === 'instructor') {
          //yet3da lel dachbord mta3 instructor
          return setRole('instructor')
      } else if (role === 'student') {
       //yet3ada lel dachbord mta3 student 
       //bel <link> mta3 sign up button 
       return setRole('student')

      } else {
        setError('Invalid role. Please contact support.')
        setError('Invalid role. Please contact support.');

      }
      if (response.status === 200) {
        console.log("Login successful");
      } else {
      console.log('error');
        console.error("Authentication failed");
      }

    } catch (error) {
      console.log(error);

      setError(error.response.data.msg);
    }
  }
console.log(Error);

    return (
     <div className="flex items-center justify-center mt-14">
      <div className=" login-page flex gap-4  overflow-hidden">
      <div className="">
            <Image src={signinPhoto}
            width={800}
            alt="Picture of the author"
            className=""
          />
        </div>
        <div className="">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Ready to start your success story?
          </h2>
          <p className="text-gray-600 font-semibold mb-4">
          Please enter your email address and password to proceed
          </p>
          <form className="space-y-4">
          {Error&&<span className="error-message mt-8 flex items-center justify-center bg-[#EF665B] p-2 w-68 text-sm font-bold text-[#fff] rounded-lg" id="name-error"> {Error}</span>}
            <div>
              <label htmlFor="Email" className="block font-semibold text-gray-700">
                Email
              </label>
              <div className="flex border mt-4 p-2.5 rounded-lg">
              <FontAwesomeIcon icon={faAt} className="w-4 ml-1.5 text-[#171a29]" />
              <input
                id="Email"
                className="w-full ml-2 outline-none"
                placeholder="Enter your email address"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </div>
              
            </div>
            <div>
              <label htmlFor="password" className="block font-semibold  text-gray-700">
                Password
              </label>
              <div className="flex border mt-4 p-2.5 rounded-lg">
              <FontAwesomeIcon icon={faLock} className="w-4 ml-1.5 text-[#171a29]" />

              <input
                id="password"
                className="w-full ml-2 outline-none"
                placeholder="Enter Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              </div>
            </div>
            <div className="">
            </div>
          </form>
              <button
                className="w-full px-6 py-3 mt-3  bg-[#a200ff] text-white rounded-lg hover:bg-white hover:text-[#a200ff] border-2 border-[#a200ff] transition-colors duration-300"
                type="button" 
                onClick={()=>{handleSubmit()}}
              >
                Login
              </button>
          <div className="signup-sugg">
          <h5 className="mt-3 flex items-center justify-center">Don't have an account? <Link href='/signup' className="text-[#a200ff] ml-3 font-bold">Sign up</Link> </h5>
        </div>
        </div>
      </div>
    </div>
    )
  }