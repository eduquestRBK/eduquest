import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBook, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
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
      reviews: [
        { id: 1, user: "John Smith", comment: "Great course, very informative!" },
        { id: 2, user: "Alice Johnson", comment: "Enjoyed the hands-on projects." }
      ],
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
      reviews: [
        { id: 1, user: "Mary Brown", comment: "Excellent course, highly recommended!" },
        { id: 2, user: "David White", comment: "Challenging but rewarding." }
      ],
      image: image1
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      instructor: "Alex Green",
      rating: 4.7,
      students: 1100,
      category: "Data Science",
      description: "Get started with machine learning algorithms and applications.",
      reviews: [
        { id: 1, user: "Emma Lee", comment: "Very insightful course!" },
        { id: 2, user: "Michael Brown", comment: "Clear explanations and practical examples." }
      ],
      image: image1
    },
    {
      id: 4,
      title: "Mastering Python",
      instructor: "Sarah White",
      rating: 4.9,
      students: 1500,
      category: "Programming",
      description: "Become proficient in Python programming language from basics to advanced topics.",
      reviews: [
        { id: 1, user: "Adam Black", comment: "Best Python course I've taken!" },
        { id: 2, user: "Olivia Green", comment: "Great course, highly recommend for beginners." }
      ],
      image: image1
    }
  ];

  const [activeTab, setActiveTab] = useState("All");

  // Extracting unique categories from courses
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
        {categories.map(category => (
          <button
            key={category}
            className={`py-2 px-4 rounded-lg font-semibold flex items-center focus:outline-none ${activeTab === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleTabClick(category)}
          >
            {category === "Web Development" && (
              <FontAwesomeIcon icon={faCode} className="mr-2 h-4" />
            )}
            {category === "Data Science" && (
              <FontAwesomeIcon icon={faBook} className="mr-2 h-4" />
            )}
            {category !== "Web Development" && category !== "Data Science" && (
              <FontAwesomeIcon icon={faStar} className="mr-2 h-4" />
            )}
            {category}
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
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span>{course.instructor}</span>
              <div className="flex items-center ml-4">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
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
