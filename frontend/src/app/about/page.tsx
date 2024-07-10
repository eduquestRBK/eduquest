import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

const About: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">About Us</h1>

        <div className="text-center mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3">
            EduQuest is an online learning community with thousands of classes in design, business, tech, and more. Our mission is to provide quality education accessible to everyone, everywhere.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3">
            Whether you are looking to advance your career, explore new hobbies, or just learn something new, EduQuest has the perfect course for you. Join our community and take the next step in your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-1 sm:p-4">
            <FontAwesomeIcon icon={faUserGraduate} className="text-sm sm:text-base text-primary" />
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mt-2 sm:mt-3 mb-1">Students</h3>
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              Our students come from all walks of life, eager to learn and grow. With EduQuest, you can learn at your own pace, anytime, and anywhere.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-1 sm:p-4">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-sm sm:text-base text-primary" />
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mt-2 sm:mt-3 mb-1">Teachers</h3>
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              Our teachers are industry experts who are passionate about sharing their knowledge. They bring real-world experience and practical skills to the classroom.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-1 sm:p-4">
            <FontAwesomeIcon icon={faLightbulb} className="text-sm sm:text-base text-primary" />
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mt-2 sm:mt-3 mb-1">Ideas</h3>
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              EduQuest is a hub for innovation and creativity. Our courses are designed to spark new ideas and help you think outside the box.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">Join Our Community</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3">
            Become a part of our vibrant community and start your learning journey today. Connect with like-minded individuals, share your work, and get inspired.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-5">
            At EduQuest, we strive to create a supportive and inclusive environment where everyone can thrive.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Our platform empowers students and teachers alike to achieve their goals and make a positive impact in the world. Join us and be part of a movement that believes in the power of education to transform lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
