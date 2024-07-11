import React from 'react';
import Image from 'next/image';
import Navbar from "../component/Navbar";
import Footer from '../component/Footer'

const Favourite = () => {
  const courses = [
    {
      imageUrl: '/frontend/src/image/make-a-logo-online.png', 
      title: 'Marketing Strategies',
      description: 'Learn effective marketing strategies from industry leaders.',
      instructor: 'John Doe',
      rating: 4.5,
    },
    {
      imageUrl: '/frontend/src/image/make-a-logo-online.png', 
      title: 'Illustration Techniques',
      description: 'Master illustration techniques with hands-on projects.',
      instructor: 'Jane Smith',
      rating: 4.8,
    },
    {
      imageUrl: '/frontend/src/image/make-a-logo-online.png', 
      title: 'Web Development Fundamentals',
      description: 'Start your journey in web development with this beginner-friendly course.',
      instructor: 'Michael Johnson',
      rating: 4.7,
    },
    {
      imageUrl: '/frontend/src/image/make-a-logo-online.png', 
      title: 'Photography Masterclass',
      description: 'Become a skilled photographer with expert tips and practical assignments.',
      instructor: 'Emily Brown',
      rating: 4.9,
    },
  ];

  return (
    <div className=''>
        <Navbar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {courses.map((course, index) => (
        <div key={index} className="course-card max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={course.imageUrl}
            alt={course.title}
            width={320}
            height={200}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-700 mt-2">{course.description}</p>
            <p className="text-gray-600 mt-2">{course.instructor} · {course.rating} ★</p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Favourite;
