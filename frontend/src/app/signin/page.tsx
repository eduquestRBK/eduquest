import Image from "next/image"
import signinPhoto from "../../image/make-a-logo-online.png"
export default function signin(){
 
    return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Ready to start your success story?
          </h2>
          <p className="text-gray-600 mb-4">
          Please enter your email address and password to proceed
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a200ff] text-black"
                placeholder="Email"
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                password
              </label>
              <input
                id="password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a200ff] text-black"
                placeholder="password"
                type="password"
                required
              />
            </div>
            <div className="mt-6">
              <button
                className="w-full px-6 py-3 bg-[#a200ff] text-white rounded-lg hover:bg-white hover:text-[#a200ff] border-2 border-[#a200ff] transition-colors duration-300"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/1 relative m-5">
            <Image src={signinPhoto}
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
    )
  }