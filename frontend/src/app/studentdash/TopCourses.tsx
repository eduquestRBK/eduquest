import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'; // Import additional icons as needed

const TopCourses = () => {
  // Dummy course data
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "Jane Doe",
      rating: 4.5,
      students: 1289,
      description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
      reviews: [
        { id: 1, user: "John Smith", comment: "Great course, very informative!" },
        { id: 2, user: "Alice Johnson", comment: "Enjoyed the hands-on projects." }
      ]
    },
    {
      id: 2,
      title: "Advanced JavaScript Techniques",
      instructor: "John Doe",
      rating: 4.8,
      students: 987,
      description: "Master advanced JavaScript concepts like closures, async/await, and more.",
      reviews: [
        { id: 1, user: "Mary Brown", comment: "Excellent course, highly recommended!" },
        { id: 2, user: "David White", comment: "Challenging but rewarding." }
      ]
    }
    // Add more courses as needed
  ];

  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 h-1/2">
      <h2 className="text-3xl font-semibold text-center mb-6 text-white">Top Courses</h2>
      {courses.map(course => (
        <div key={course.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
          {/* Course Title */}
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          {/* Instructor and Rating */}
          <div className="flex items-center text-gray-500 mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <span>{course.instructor}</span>
            <div className="flex items-center ml-4">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
              <span>{course.rating.toFixed(1)}</span>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex mb-4">
            <button
              className={`py-2 px-4 mr-4 text-sm font-semibold focus:outline-none ${activeTab === 'description' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
              onClick={() => handleTabClick('description')}
            >
              Description
            </button>
            <button
              className={`py-2 px-4 mr-4 text-sm font-semibold focus:outline-none ${activeTab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
              onClick={() => handleTabClick('reviews')}
            >
              Reviews ({course.reviews.length})
            </button>
            <button
              className={`py-2 px-4 text-sm font-semibold focus:outline-none ${activeTab === 'enrollment' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
              onClick={() => handleTabClick('enrollment')}
            >
              Enrollment ({course.students})
            </button>
          </div>
          {/* Tab Content */}
          <div>
            {activeTab === 'description' && (
              <div className="text-gray-600">{course.description}</div>
            )}
            {activeTab === 'reviews' && (
              <div>
                {course.reviews.map(review => (
                  <div key={review.id} className="border-b border-gray-200 py-2">
                    <div className="font-semibold">{review.user}</div>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'enrollment' && (
              <div className="text-gray-600">Enrollment section content goes here.</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopCourses;
