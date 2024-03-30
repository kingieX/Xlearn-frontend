import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    // Fetch course details based on the ID from your API
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/course/${id}`);
        setCourseDetails(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (!courseDetails) {
    return <p>Loading...</p>;
  }

  const handleList = () => {
    // addToLists(courseDetails)
  }

  // Render the details of the selected course
  return (
    <div>
        <Navbar />
        <div className='flex flex-col justify-center m-5'>
            <img src={courseDetails.image} alt={courseDetails.name} className="w-full p-2 h-40 object-cover rounded" />
            <h2 className='text-4xl font-semibold mx-2'>{courseDetails.course_name}</h2>
            <p className='text-lg font-semibold pr-color mx-2'>University: {courseDetails.university}</p>
            <div className='flex flex-row text-xl font-semibold gap-4 mb-2 mx-2 pr-color'>
                <p className=''>Rating: {courseDetails.course_rating}</p>
                <p>Difficulty level: {courseDetails.difficulty_level}</p>
            </div>
                <p className='text-xl ml-2 font-semibold'>Skills: {courseDetails.skills}</p>
            {/* <p className='mx-2'>{courseDetails.course_URL}</p> */}
            <p className='mx-2 text-md mt-2'><span className='font-semibold text-xl'>Details:</span> <br />{courseDetails.course_description}</p>
            <div className='mt-2 text-white'>
              <button
                // onClick={handleList}
                className='btn-color px-3 mr-4 py-2 rounded-xl hover:text-purple-700 hover:bg-white hover:border-2 hover:border-gray-300'
                >
                  <a href={courseDetails.course_URL} target='blank'>Start course</a>
                </button>
              <button
                onClick={handleList}
                className='btn-color px-3 py-2 rounded-xl hover:text-purple-700 hover:bg-white hover:border-2 hover:border-gray-300'
                >
                  + Add to My List
                </button>
            </div>
        </div>
    </div>
  );
};

export default CourseDetails;