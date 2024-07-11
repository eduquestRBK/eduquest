"use client"
import Link from 'next/link';
import logo from '../../image/eduquest.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} width={150} alt="Eduquest Logo" className='mr-4'/>
            </Link>
            <div className="hidden sm:flex space-x-8 ml-6">
              <Link href="/">
                <span className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Browse
                </span>
              </Link>
              <Link href="/allCourses">
                <span className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Learn
                </span>
              </Link>
              <Link href="/teach">
                <span className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Teach
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  About us
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-5 ">
          <div className="relative flex items-center">
              <input
                type="search"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none "
                placeholder="Search"
              />
              <FontAwesomeIcon icon={faSearch} className=" w-4 absolute right-3 top-3 text-primary  cursor-pointer " />
            </div>
            <Link href="/signup">
              <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md">
                SignUp
              </button>
            </Link>
            <Link href="/signin">
              <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md ">
                LogIn
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
