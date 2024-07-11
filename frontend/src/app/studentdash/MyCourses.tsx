// MyCourses.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBook,
  faCircleQuestion,
  faSliders,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const MyCourses = () => {
  // Dummy data for courses with different statuses and categories
  const courses = [
    { id: 1, title: "React Basics", status: "pending", category: "Web Development" },
    { id: 2, title: "Advanced CSS", status: "accepted", category: "Web Development" },
    { id: 3, title: "JavaScript Fundamentals", status: "rejected", category: "Web Development" },
    { id: 4, title: "Node.js Essentials", status: "pending", category: "Web Development" },
    { id: 5, title: "Reading Comprehension", status: "accepted", category: "Reading" },
    { id: 6, title: "Literary Analysis", status: "rejected", category: "Reading" },
    { id: 7, title: "Introduction to Philosophy", status: "pending", category: "Reading" },
    { id: 8, title: "Introduction to Statistics", status: "pending", category: "Mathematics" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return " text-yellow-600 ";
      case "accepted":
        return " text-green-600";
      case "rejected":
        return " text-red-600";
      default:
        return " text-gray-600";
    }
  };



  return (
    <div className="bg-white p-8 rounded-lg mb-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className=" bg-primary">
            <tr>
              <th className="py-3 px-4 text-center text-white">ID</th>
              <th className="py-3 px-4 text-center text-white">Course Title</th>
              <th className="py-3 px-4 text-center text-white">Category</th>
              <th className="py-3 px-4 text-center text-white">Status</th>
            </tr>
          </thead>
          <tbody >
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-100">
                <td className="py-4 px-6 border-b border-gray-300 text-center font-semibold">{course.id}</td>
                <td className="py-4 px-6 border-b border-gray-300">
                  <div className="text-center ">
                    <h1 className="text-center font-semibold">{course.title}</h1>
                  </div>
                </td>
                <td className="py-4 text-center px-6 border-b border-gray-300 font-semibold">{course.category}</td>
                <td className={`py-4 text-center px-6 border-b border-gray-300 font-semibold${getStatusColor(course.status)}`}>
                  {course.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
