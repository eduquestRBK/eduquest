import { useState } from 'react';
import Image from 'next/image';
import image1 from '../../image/allcourses-bg.jpg';

const TopCourses = () => {
  const [showAll, setShowAll] = useState(false);
  const initialCourses = 3; // Number of courses to show initially

  // Dummy data for courses
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "Jane Doe",
      category: "Web Development",
      description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
      image: image1
    },
    {
      id: 2,
      title: "Introduction to Economics",
      instructor: "Emily Green",
      category: "Economy",
      description: "Understand basic economic principles and theories.",
      image: image1
    },
    {
      id: 3,
      title: "Management Skills",
      instructor: "Oliver Black",
      category: "Management",
      description: "Develop essential management skills for leadership roles.",
      image: image1
    },
    {
      id: 4,
      title: "Introduction to Science",
      instructor: "Sarah White",
      category: "Science",
      description: "Explore the basics of various scientific disciplines.",
      image: image1
    },
    {
      id: 5,
      title: "History & Geography",
      instructor: "Lucas Moore",
      category: "History&Geography",
      description: "Discover historical events and geographical features.",
      image: image1
    },
    {
      id: 6,
      title: "Art & Literature",
      instructor: "Sophie Gray",
      category: "Art&Literature",
      description: "Explore artistic and literary works from different periods.",
      image: image1
    }
  ];

  const visibleCourses = showAll ? courses : courses.slice(0, initialCourses);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-black">Recent Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleCourses.map(course => (
          <div key={course.id} className="bg-gray-100 shadow-md rounded-lg p-4 mb-4 w-full">
            <div className="relative rounded-lg overflow-hidden mb-4" style={{ height: '150px' }}>
              <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <div className="text-gray-600 mb-2 font-semibold">{course.category}</div>
            <p className="text-gray-500 mb-2">{course.description}</p>
            <div className="mt-2">
              <button
                className="bg-[#171a29] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#171A29] focus:outline-none"
                onClick={() => console.log(`Enrolling in course with ID: ${course.id}`)}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="mt-4">
          <button
            className="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
      {showAll && (
        <div className="mt-4">
          <button
            className="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none "
            onClick={handleSeeLess}
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
}

export default TopCourses;
