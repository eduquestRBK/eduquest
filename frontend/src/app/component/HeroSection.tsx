// HeroSection.jsx (Client Component example)
import Link from 'next/link';
import hero from '../../image/hero2.png';

import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight text-white">
              Level up your skills. Enroll in online courses from <span className="text-primary">industry experts</span>.
              <br />
            </h1>
            <p className="text-gray-200 mt-4 text-lg">
              Explore a <span className="text-primary">vast library</span> of courses designed to launch your career,
              hone your <span className="text-primary">creative talents</span>, and propel your professional growth.
              Find the <span className="text-primary">perfect course</span> and start learning today!
            </p>
            <Link href="/courses">
              <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium mt-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 animate-bounce">
                Start learning today
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Image src={hero} alt="hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
