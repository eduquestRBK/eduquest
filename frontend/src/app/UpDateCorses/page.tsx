'use client'
import {useState} from "react";
import Link from "next/link";
import axios from "axios"
import { useRouter } from 'next/navigation'
import Navbar from "../component/Navbar";
import Footer from '../component/Footer'

const page=()=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [note, setNote] = useState('');


return(
    <div className="">
        <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold text-[#a200ff] mb-8">Update Course</h1>
      <form className="bg-white p-8  rounded-lg   max-w-md w-full" >
        <div className="mb-4">
          <label className=" block font-semibold  text-gray-700">Course Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className=" flex border mt-4 p-2.5 rounded-lg w-full ml-2 outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className=" block font-semibold  text-gray-700">Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="flex border mt-4 p-2.5 rounded-lg w-full ml-2 outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className=" block font-semibold  text-gray-700">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="flex border mt-4 p-2.5 rounded-lg w-full ml-2 outline-none"
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
          <label className=" block font-semibold  text-gray-700">Content</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="flex border mt-4 p-2.5 rounded-lg w-full ml-2 outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className=" block font-semibold  text-gray-700">Note</label>
          <input
            type="text"
            onChange={(e) => setNote(e.target.value)}
            className="flex border mt-4 p-2.5 rounded-lg w-full ml-2 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-[#a200ff] hover:bg-white text-white hover:text-[#a200ff] font-bold py-2 px-4 rounded border-2 border-[#a200ff] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#a200ff]"
        >
         Up to date
        </button>
      </form>
    </div>
    <Footer/>
    </div>
)
}
export default page
