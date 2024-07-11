"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBook,
  faVideo,
  faComments,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Help & Support</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* FAQ Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-4xl text-blue-500"
            />
            <h3 className="ml-4 text-xl font-bold">FAQ</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Find answers to the most frequently asked questions.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Go to FAQ
          </a>
        </div>

        {/* Tutorials Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faBook}
              className="text-4xl text-green-500"
            />
            <h3 className="ml-4 text-xl font-bold">Tutorials</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Explore step-by-step guides and tutorials.
          </p>
          <a
            href="#"
            className="text-green-500 hover:text-green-700 font-semibold"
          >
            View Tutorials
          </a>
        </div>

        {/* Video Guides Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-4xl text-red-500"
            />
            <h3 className="ml-4 text-xl font-bold">Video Guides</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Watch video guides for more detailed explanations.
          </p>
          <a
            href="#"
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Watch Videos
          </a>
        </div>

        {/* Community Forums Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faComments}
              className="text-4xl text-purple-500"
            />
            <h3 className="ml-4 text-xl font-bold">Community Forums</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Join the community and ask your questions.
          </p>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-700 font-semibold"
          >
            Visit Forums
          </a>
        </div>

        {/* Contact Support Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-4xl text-orange-500"
            />
            <h3 className="ml-4 text-xl font-bold">Contact Support</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Get in touch with our support team for assistance.
          </p>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-700 font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
