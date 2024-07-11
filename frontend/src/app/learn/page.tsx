"use client "

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import featuredClass1 from '../../image/hero2.png';
import featuredClass2 from '../../image/allcourses-bg.jpg';

const page = () => {
  // Dummy data for featured classes
  const featuredClasses = [
    {
      id: 1,
      title: "Graphic Design Basics: Core Principles for Visual Design",
      instructor: "John Doe",
      rating: 4.8,
      students: 1023,
      image: featuredClass1,
    },
    {
      id: 2,
      title: "The Ultimate Guide to Watercolor Painting",
      instructor: "Jane Smith",
      rating: 4.9,
      students: 854,
      image: featuredClass2,
    },
    // Add more featured classes as needed
  ];

  // Dummy data for trending topics
  const trendingTopics = [
    "Graphic Design",
    "Web Development",
    "Photography",
    "Creative Writing",
    "Marketing",
    "Business Analytics",
    // Add more topics as needed
  ];

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

      {/* Featured Classes */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Featured Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredClasses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
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

      {/* Trending Topics */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Trending Topics</h2>
          <div className="flex flex-wrap -m-2">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="p-2 w-1/2 md:w-1/4">
                <div className="bg-white shadow-md rounded-lg p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{topic}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
