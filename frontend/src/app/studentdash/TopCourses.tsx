import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faUser, faStar, faMoneyBill, faBriefcase, faFlask, faGlobe, faPalette } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import image1 from '../../image/allcourses-bg.jpg';

const TopCourses = () => {
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
    {
      id: 3,
      title: "Math Fundamentals",
      instructor: "Michael Johnson",
      rating: 4.3,
      students: 760,
      category: "Math",
      description: "Master the fundamental concepts of mathematics.",
      image: image1
    },
    {
      id: 4,
      title: "Introduction to Economics",
      instructor: "Emily Green",
      rating: 4.6,
      students: 890,
      category: "Economy",
      description: "Understand basic economic principles and theories.",
      image: image1
    },
    {
      id: 5,
      title: "Management Skills",
      instructor: "Oliver Black",
      rating: 4.7,
      students: 1023,
      category: "Management",
      description: "Develop essential management skills for leadership roles.",
      image: image1
    },
    {
      id: 6,
      title: "Introduction to Science",
      instructor: "Sarah White",
      rating: 4.4,
      students: 832,
      category: "Science",
      description: "Explore the basics of various scientific disciplines.",
      image: image1
    },
    {
      id: 7,
      title: "History & Geography",
      instructor: "Lucas Moore",
      rating: 4.9,
      students: 1134,
      category: "History&Geography",
      description: "Discover historical events and geographical features.",
      image: image1
    },
    {
      id: 8,
      title: "Art & Literature",
      instructor: "Sophie Gray",
      rating: 4.8,
      students: 998,
      category: "Art&Literature",
      description: "Explore artistic and literary works from different periods.",
      image: image1
    }
  ];

  const [activeTab, setActiveTab] = useState("All");

  const categories = Array.from(new Set(courses.map(course => course.category)));

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const handleEnrollClick = (courseId) => {
    console.log(`Enrolling in course with ID: ${courseId}`);
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-black">Top Courses</h2>
      <div className="flex justify-start mb-4 space-x-2">
        {['All', ...categories].map(category => (
          <button
            key={category}
            className={`py-2 px-4 rounded-lg font-semibold flex items-center focus:outline-none ${activeTab === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleTabClick(category)}
          >
            {category === "All" && (
              <FontAwesomeIcon icon={faCalculator} className="mr-2 h-3" />
            )}
            {category === "Math" && (
              <FontAwesomeIcon icon={faCalculator} className="mr-2 h-3" />
            )}
            {category === "Economy" && (
              <FontAwesomeIcon icon={faMoneyBill} className="mr-2 h-3" />
            )}
            {category === "Management" && (
              <FontAwesomeIcon icon={faBriefcase} className="mr-2 h-3" />
            )}
            {category === "Science" && (
              <FontAwesomeIcon icon={faFlask} className="mr-2 h-3" />
            )}
            {category === "History&Geography" && (
              <FontAwesomeIcon icon={faGlobe} className="mr-2 h-3" />
            )}
            {category === "Art&Literature" && (
              <FontAwesomeIcon icon={faPalette} className="mr-2 h-3" />
            )}
            {category === "All" ? 'All' : category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.filter(course => activeTab === "All" || course.category === activeTab).map(course => (
          <div key={course.id} className="bg-gray-100 shadow-md rounded-lg p-4 mb-4 w-full">
            <div className="relative rounded-lg overflow-hidden mb-4" style={{ height: '150px' }}>
              <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <div className="flex items-center text-gray-500 mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" style={{ fontSize: '0.9rem' }} />
              <span>{course.instructor}</span>
              <div className="flex items-center ml-4">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" style={{ fontSize: '0.9rem' }} />
                <span>{course.rating.toFixed(1)}</span>
              </div>
            </div>
            <div className="text-gray-600 mb-2 font-semibold">{course.category}</div>
            <div className="mt-2">
              <button
                className="bg-[#171a29] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#171A29] focus:outline-none"
                onClick={() => handleEnrollClick(course.id)}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCourses;
