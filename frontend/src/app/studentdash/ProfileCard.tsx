import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUser, faEnvelope, faPhone, faFemale, faHeart, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import additional icons as needed
import Image from 'next/image';
import profilePicture from "../../image/profile.jpg";

const ProfileCard = () => {
  // Dummy data object
  const userData = {
    username: "yosr jdly",
    email: "yosrjdly@example.com",
    profileImage: profilePicture, 
    gender: "female",
    phoneNumber: "+216 99 855 238",
    interests: ["Coding", "Reading", "Sports"], 
    courses: [
      { id: 1, name: "Introduction to Coding", status: "In Progress", date: "2024-07-15" },
      { id: 2, name: "Advanced Reading Techniques", status: "Completed", date: "2024-07-20" },
      { id: 3, name: "Sports Analytics", status: "Upcoming", date: "2024-08-01" }
    ]
  };

  return (
    <div className="flex flex-col items-center">
      {/* Profile Picture */}
      <div className="relative rounded-full border-4 border-primary overflow-hidden w-24 h-24 mb-2">
        <Image src={userData.profileImage} alt="Profile Picture" layout="fill" objectFit="cover" className="rounded-full" />
        {/* Edit Icon */}
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 rounded-full p-1">
          <FontAwesomeIcon icon={faEdit} className="text-black cursor-pointer" />
        </div>
      </div>
      {/* Username */}
      <div className="text-[#171a29] text-lg font-semibold">{userData.username}</div>
      {/* Email */}
      <div className="text-sm text-gray-500 mb-2">{userData.email}</div>

      {/* Additional Info with Icons */}
      <div className="flex flex-col items-center text-gray-500 space-y-2">
        {/* Gender */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faFemale} className="mr-2" />
          <span>{userData.gender}</span>
        </div>
        {/* Phone Number */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          <span>{userData.phoneNumber}</span>
        </div>
        {/* Interests */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          <span>{userData.interests.join(', ')}</span>
        </div>
      </div>

      <div className="mt-4 w-full p-4   rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Courses Calendar</h3>
        <div className="grid grid-cols-1 gap-4">
          {userData.courses.map(course => (
            <div key={course.id} className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">{course.name}</div>
                <div className={`text-sm font-semibold ${getStatusColor(course.status)}`}>
                  {course.status}
                </div>
              </div>
              <div className="flex items-center text-primary">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                <span>{formatDate(course.date)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Function to determine status color
const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "text-blue-600";
    case "Completed":
      return "text-green-600";
    case "Upcoming":
      return "text-gray-600";
    default:
      return "text-gray-600";
  }
}

// Function to format date (assuming ISO format "YYYY-MM-DD")
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default ProfileCard;
