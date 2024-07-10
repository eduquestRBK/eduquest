import Image from "next/image"
import signinPhoto from "../../image/make-a-logo-online.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

export default function signin(){
 
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
                required
              />
              </div>
            </div>
            <div className="">
              <button
                className="w-full px-6 py-3 mt-3  bg-[#a200ff] text-white rounded-lg hover:bg-white hover:text-[#a200ff] border-2 border-[#a200ff] transition-colors duration-300"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="signup-sugg">
          <h5 className="mt-3 flex items-center justify-center">Don't have an account? <Link href='/signup' className="text-[#a200ff] ml-3 font-bold">Sign up</Link> </h5>
        </div>
        </div>
      </div>
    </div>
    )
  }