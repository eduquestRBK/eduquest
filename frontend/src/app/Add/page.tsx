'use client'
import {useState} from "react";
import Link from "next/link";
import axios from "axios"
import { useRouter } from 'next/navigation'
import Navbar from "../component/Navbar";
import Footer from '../component/Footer'
import Image from "next/image";
import addCorse from "../../image/One-Shot-Revision-Class.png"

const page=()=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [note, setNote] = useState('');


return(
<div>
<Navbar />
<div className="min-h-screen bg-gray-100 flex flex-col items-center">
  <div className="bg-[#6a1b9a] w-full py-12">
    <h1 className="text-3xl font-bold text-white text-center">Add a New Course</h1>
  </div>
  <div className="flex justify-center w-full p-0 px-1">
    <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Course Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2.5 rounded-lg w-full outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2.5 rounded-lg w-full outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2.5 rounded-lg w-full outline-none"
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
          className="border p-2.5 rounded-lg w-full outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Note</label>
        <input
          type="text"
          onChange={(e) => setNote(e.target.value)}
          className="border p-2.5 rounded-lg w-full outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-[#6a1b9a] hover:bg-white text-white hover:text-[#6a1b9a] font-bold py-2 px-4 rounded border-2 border-[#6a1b9a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6a1b9a]"
      >
        Add Course
      </button>
    </form>
  </div>
</div>
<Footer />
</div>
    
)
}
export default page
