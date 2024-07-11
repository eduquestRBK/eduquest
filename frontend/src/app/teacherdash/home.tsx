import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const page = (props: { active: boolean }) => {
    
      
  return (
    <div className="">
    <div className={!props.active ?'main-dash-act absolute' : 'main-dash absolute'} >
        <div className="top-bar w-full h-20 flex justify-between items-center">
            <div className="user-name relative top-0 flex items-center justify-center">
            <h5 className="text-xl font-bold text-[#171a29]">Welcome, Username 👋</h5>
            </div>
            <div className="add-corse bg-[#171a29] rounded-lg text-[#fff] relative top-0 p-2 gap-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faCirclePlus} className='w-6 h-6' />
                <button >Add Course</button>
            </div>
            <div className="profile-image relative top-0 h-14 w-14 flex items-center justify-center rounded-full overflow-hidden">
                <img className='absolute top-0 left-0 w-full h-full object-cover' src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="Profile"/>
            </div>
        </div>
        <div className="container-dashbord mt-10">
          <div className="title flex ml-24 p-1">
            <h5 className='text-2xl font-bold text-[#171a29]'>Dashborad</h5>
          </div>
          <div className="statics flex ml-24 p-1 mt-6 justify-between w-2/3 items-center">
            <div className="corses bg-slate-100 p-8 rounded-xl flex items-center justify-center">
              <h5>Total Corses</h5>
            </div>
            <div className="students  bg-slate-100 p-8 rounded-xl flex items-center justify-center">
              <h5>Total Students</h5>
            </div>
            <div className="pending  bg-slate-100 p-8 rounded-xl flex items-center justify-center">
              <h5>Pending Corses</h5>
          </div>
        </div>
        <div className="explore-corses">
          <div className="title flex ml-24 mt-6 p-1">
            <h5 className='text-2xl font-bold text-[#171a29]'>Explore Your Courses</h5>
          </div>
          <div className="course-list flex ml-24 p-1 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div  className="p-4 bg-white shadow-md rounded-lg">
              <Image
                src=''
                alt=''
                width={320}
                height={400}
                className="object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Marketing Strategies
              </h3>
              <p className="text-gray-700">Learn effective marketing strategies from industry leaders.</p>
              <p className="text-gray-600 mt-2">John Doe · 4.5 ★</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default page