import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Navbar from "../component/Navbar";
import Footer from '../component/Footer';
import Image from 'next/image';
import aboutImage from '../../image/hero2.png'; // Adjust path to your image

const About: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-lg overflow-hidden h-96">
              <Image
                src={aboutImage}
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Welcome to EduQuest</h1>
              <p className="text-lg text-gray-700 mb-6">
                EduQuest is not just an online learning platform; it's a vibrant community where knowledge meets creativity, and learning knows no boundaries.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is simple yet ambitious: to empower individuals worldwide through accessible, quality education. Whether you're a student, an educator, or an innovator, EduQuest is your gateway to endless possibilities.
              </p>
              <p className="text-lg text-gray-700">
                Join us on this journey of discovery, where every click opens a new door to knowledge, every course inspires a new idea, and every interaction sparks a new connection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
              <FontAwesomeIcon icon={faUserGraduate} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Students</h3>
              <p className="text-lg text-gray-700 text-center">
                Dive into a world of knowledge tailored to your interests. Learn at your own pace, explore diverse subjects, and connect with a global community of learners.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Educators</h3>
              <p className="text-lg text-gray-700 text-center">
                Share your expertise with eager minds. Inspire and mentor students worldwide with our intuitive platform designed for effective teaching and learning.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
              <FontAwesomeIcon icon={faLightbulb} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Innovators</h3>
              <p className="text-lg text-gray-700 text-center">
                Fuel your creativity and innovation. Explore new ideas, develop skills, and collaborate with like-minded individuals to drive positive change in your field.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Join Our Community Today</h2>
            <p className="text-lg text-gray-700 mb-4 sm:mb-5">
              Start your journey with EduQuest and unlock a world of opportunities. Connect, learn, and grow with us as we redefine the future of education together.
            </p>
            <p className="text-lg text-gray-700 mb-4 sm:mb-5">
              Whether you're here to expand your skills, share your knowledge, or simply explore new horizons, EduQuest welcomes you with open arms.
            </p>
            <p className="text-lg text-gray-700">
              Together, let's build a community where learning knows no boundaries and every dream has the potential to become reality.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
