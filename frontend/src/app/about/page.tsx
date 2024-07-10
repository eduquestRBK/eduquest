import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

const About: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">About Us</h1>

        <div className="text-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
            EduQuest is an online learning community with thousands of classes in design, business, tech, and more.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
            Anyone can join the millions of members in our community to learn cutting-edge skills, network with peers, and discover new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 sm:p-6">
            <FontAwesomeIcon icon={faUserGraduate} className="text-lg sm:text-2xl text-primary" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 sm:mt-4 mb-2">Students</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui dolor.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 sm:p-6">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-lg sm:text-2xl text-primary" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 sm:mt-4 mb-2">Teachers</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui dolor.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 sm:p-6">
            <FontAwesomeIcon icon={faLightbulb} className="text-lg sm:text-2xl text-primary" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 sm:mt-4 mb-2">Ideas</h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui dolor.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">Join Our Community</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
            Become a part of our vibrant community and start your learning journey today. Connect with like-minded individuals, share your work, and get inspired.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
            At EduQuest, we strive to create a supportive and inclusive environment where everyone can thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
