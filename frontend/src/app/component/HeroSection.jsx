import Link from 'next/link';
import hero from '../../image/herosection-image.png'
import Image from 'next/image';
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight text-white">
              Level up your skills. Enroll in online courses from industry experts.
              <br />
            </h1>
            <p className="text-gray-200 mt-4 text-lg">
              Explore a vast library of courses designed to launch your career,
              hone your creative talents, and propel your professional growth.
              Find the perfect course and start learning today!
            </p>
            <Link href="/courses">
              <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium mt-6">
                Start learning today
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Image src={hero} alt="hero" className="w-200 h-200 object-cover"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
