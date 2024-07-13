import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import featuredClass1 from '../../image/hero2.png';
import featuredClass2 from '../../image/allcourses-bg.jpg';

const DisplayedCourses = () => {
  // Dummy data for courses based on categories
  const courses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "John Doe",
      rating: 4.8,
      students: 1023,
      image: featuredClass1,
      category: "Math",
    },
    {
      id: 2,
      title: "Principles of Economics",
      instructor: "Jane Smith",
      rating: 4.9,
      students: 854,
      image: featuredClass2,
      category: "Economy",
    },
    {
      id: 3,
      title: "Business Management Essentials",
      instructor: "Mary Johnson",
      rating: 4.7,
      students: 940,
      image: featuredClass1,
      category: "Management",
    },
    {
      id: 4,
      title: "Introduction to Science",
      instructor: "Robert Brown",
      rating: 4.6,
      students: 780,
      image: featuredClass2,
      category: "Science",
    },
    {
      id: 5,
      title: "World History",
      instructor: "Emily Davis",
      rating: 4.5,
      students: 623,
      image: featuredClass1,
      category: "History&Geography",
    },
    {
      id: 6,
      title: "Art & Literature Appreciation",
      instructor: "Michael Wilson",
      rating: 4.9,
      students: 512,
      image: featuredClass2,
      category: "Art&Literature",
    },
    // Add more courses as needed
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Courses Display */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                    Explore Course
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayedCourses;
