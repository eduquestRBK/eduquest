'use client'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBook, faUser, faStar } from '@fortawesome/free-solid-svg-icons'; 
import Image from 'next/image'; 
import image1 from '../../image/hero2.png';
import allCoursesBg from '../../image/allcourses-bg.jpg';

const page = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "Jane Doe",
      rating: 4.5,
      students: 1289,
      category: "Web Development",
      description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
      image: image1
    },
    {
      id: 2,
      title: "Advanced JavaScript Techniques",
      instructor: "John Doe",
      rating: 4.8,
      students: 987,
      category: "Web Development",
      description: "Master advanced JavaScript concepts like closures, async/await, and more.",
      image: image1
    },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate a delay in loading the course cards
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const handleEnrollClick = (courseId) => {
    // Placeholder function for handling enrollment
    console.log(`Enrolling in course with ID: ${courseId}`);
  };

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={allCoursesBg} alt="background" layout="fill" objectFit="cover" className="hero-image" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white text-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Your Learning Journey</h1>
            <p className="text-lg md:text-xl">Discover top courses from experts in various fields and start learning today.</p>
          </div>
          <div className="w-full max-w-md px-4">
            <input
              type="text"
              className="w-full p-3 rounded-md focus:outline-none"
              placeholder="Search for courses..."
            />
          </div>
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`py-2 px-4 mr-4 text-sm font-semibold flex items-center focus:outline-none ${activeTab === 'all' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => handleTabClick('all')}
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            All
          </button>
          <button
            className={`py-2 px-4 mr-4 text-sm font-semibold flex items-center focus:outline-none ${activeTab === 'Web Development' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => handleTabClick('Web Development')}
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            Web Development
          </button>
          <button
            className={`py-2 px-4 mr-4 text-sm font-semibold flex items-center focus:outline-none ${activeTab === 'Reading' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
            onClick={() => handleTabClick('Reading')}
          >
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Reading
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={course.id} className={`bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Image src={course.image} alt={course.title} width={400} height={225} objectFit="cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <FontAwesomeIcon icon={faStar} className="mr-1" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>
                <button
                  className="bg-primary text-white py-2 px-4 mt-4 rounded-md hover:bg-primary-dark focus:outline-none"
                  onClick={() => handleEnrollClick(course.id)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
