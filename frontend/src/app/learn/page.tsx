"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import featuredClass1 from '../../image/hero2.png';
import featuredClass2 from '../../image/allcourses-bg.jpg';

const Page = () => {
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

  const categories = [
    "Math",
    "Economy",
    "Management",
    "Science",
    "History&Geography",
    "Art&Literature",
  ];

  // State to track active category
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Learn Something New</h1>
        <p className="text-xl mb-8">Discover thousands of inspiring classes and start learning today</p>
        <button className="bg-white text-primary font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-200 transition duration-300">
          Get Started for Free
        </button>
      </div>

      {/* Categories Tabs */}
      <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-md font-semibold text-sm focus:outline-none ${
                activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } hover:bg-blue-600 transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Display */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 overflow-x-auto">
          {courses
            .filter((course) => course.category === activeCategory)
            .map((course) => (
              <div key={course.id} className="w-80 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                    <span>{course.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                    <span>{course.students} students</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
