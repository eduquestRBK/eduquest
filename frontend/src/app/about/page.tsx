// app/about/page.tsx (Next.js 13+ with `app` directory)

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Navbar from "../component/Navbar";
import Footer from '../component/Footer'



const About: React.FC = () => {
  return (
    <div className="">
      <Navbar/>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 mb-4">
            EduQuest is an online learning community with thousands of classes in design, business, tech, and more.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Anyone can join the millions of members in our community to learn cutting-edge skills, network with peers, and discover new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative w-full h-64">
            <Image 
              src="/images/about-image.jpg" // replace with your image path
              alt="About us image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to provide a platform where creativity and inspiration come together. We aim to empower individuals to achieve their personal and professional goals through learning.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At EduQuest, we believe that learning is a lifelong journey. Join us and unleash your creativity.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">At EduQuest, We Empower:</h2>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUserGraduate} className="text-4xl text-primary" />
              <span className="ml-2 text-xl text-gray-800">Students</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-4xl text-primary" />
              <span className="ml-2 text-xl text-gray-800">Teachers</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-primary" />
              <span className="ml-2 text-xl text-gray-800">Ideas</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-4">
            Become a part of our vibrant community and start your learning journey today. Connect with like-minded individuals, share your work, and get inspired.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At EduQuest, we strive to create a supportive and inclusive environment where everyone can thrive.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default About;
