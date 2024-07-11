"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCog,
  faLock,
  faBell,
  faPalette,
  faLanguage,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Settings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Account Settings Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faUserCog}
              className="text-4xl text-blue-500"
            />
            <h3 className="ml-4 text-xl font-bold">Account Settings</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Manage your account information and preferences.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Edit Account
          </a>
        </div>

        {/* Privacy Settings Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faLock}
              className="text-4xl text-green-500"
            />
            <h3 className="ml-4 text-xl font-bold">Privacy Settings</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Adjust your privacy settings and control your data.
          </p>
          <a
            href="#"
            className="text-green-500 hover:text-green-700 font-semibold"
          >
            Edit Privacy
          </a>
        </div>

        {/* Notification Settings Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faBell}
              className="text-4xl text-red-500"
            />
            <h3 className="ml-4 text-xl font-bold">Notification Settings</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Customize your notification preferences.
          </p>
          <a
            href="#"
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Edit Notifications
          </a>
        </div>

        {/* Theme Settings Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faPalette}
              className="text-4xl text-purple-500"
            />
            <h3 className="ml-4 text-xl font-bold">Theme Settings</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Choose your favorite theme and colors.
          </p>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-700 font-semibold"
          >
            Edit Theme
          </a>
        </div>

        {/* Language Settings Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faLanguage}
              className="text-4xl text-orange-500"
            />
            <h3 className="ml-4 text-xl font-bold">Language Settings</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Select your preferred language.
          </p>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-700 font-semibold"
          >
            Edit Language
          </a>
        </div>

        {/* Save Changes Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faSave}
              className="text-4xl text-teal-500"
            />
            <h3 className="ml-4 text-xl font-bold">Save Changes</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Save all your settings changes.
          </p>
          <a
            href="#"
            className="text-teal-500 hover:text-teal-700 font-semibold"
          >
            Save
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
