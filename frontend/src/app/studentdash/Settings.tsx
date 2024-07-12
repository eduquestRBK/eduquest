"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCamera,
  faUser,
  faEnvelope,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const [formData, setFormData] = useState({
    profileImage: "",
    name: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion logic
    console.log("Account deletion requested");
  };

  return (
    <div className="min-h-screen p-8 flex justify-center ">
      <div className="p-6 w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-4 mb-6 justify-center">
            <div className="relative w-16 h-16">
              {formData.profileImage ? (
                <img
                  src={URL.createObjectURL(formData.profileImage)}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-300 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCamera} className="text-white" />
                </div>
              )}
              <input
                type="file"
                name="profileImage"
                onChange={(e) => setFormData({ ...formData, profileImage: e.target.files[0] })}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">Profile Image</label>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Name</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Username</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-3" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-3" />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#171a29] text-white rounded-md transition duration-200"
          >
            Save Changes
          </button>
        </form>
        <button
          onClick={handleDeleteAccount}
          className="w-full py-2 px-4 bg-[#171a29] text-white rounded-md  transition duration-200 flex items-center justify-center mt-6"
        >
          <FontAwesomeIcon icon={faTrashAlt} className="h-5 mr-2" />
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
