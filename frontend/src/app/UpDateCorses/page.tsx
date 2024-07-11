"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faBook, faClipboard, faTag } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import background from '../../image/a200ff.png'
import Navbar from "../component/Navbar";
import Footer from '../component/Footer'

const UpdateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [note, setNote] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ title, description, category, content, note, image });
  };

  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center ">
        <Image src={background} layout="fill" objectFit="cover" alt="Background" className="absolute z-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Update the Course</h1>
          <p className="text-xl mt-2">Give your best to the world</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto py-10 px-6 bg-white shadow-lg rounded-lg">
        {/* Progress Indicator */}
        <div className="flex justify-center items-center mb-8">
        <div className="w-1/4 h-1 bg-primary rounded-full"></div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Course Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Course Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
              required
            >
              <option value="Math">Math</option>
              <option value="Economy">Economy</option>
              <option value="Management">Management</option>
              <option value="Science">Science</option>
              <option value="History&Geography">History & Geography</option>
              <option value="Art&Literature">Art & Literature</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Content</label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Note</label>
            <input
              type="text"
              onChange={(e) => setNote(e.target.value)}
              className="flex border p-2.5 rounded-lg w-full outline-none"
            />
          </div>
          <div className="flex items-center py-2">
            <label className="inline-block cursor-pointer">
              <FontAwesomeIcon icon={faUpload} className="text-primary mr-2" />
              <span className="text-primary">Upload Image</span>
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={handleImageUpload}
                required
              />
            </label>
            {image && <span className="ml-4">{image.name}</span>}
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
            >
              Update Course
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default UpdateCourse;
