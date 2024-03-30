import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import CourseCard from './CourseCard';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [allCourses, setAllCourses] = useState('');

    useEffect(() => {
        // Fetch courses from your backend API
        const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8000/courses');
            setCourses(response.data);
            setAllCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
        };

        fetchCourses();
    }, []);

  return (
    <div>
        <h2 className='ml-12 text-3xl font-bold'>Available Courses</h2>
        {allCourses ? (
            <div className="flex flex-wrap justify-between">
                {courses.map((course) => (    
                    <div className="bg-gray-200 border rounded p-4 sm:mx-5 my-4 w-64 text-center" key={course.id}>
                            {/* <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded" /> */}
                            <div className='flex justify-center items-center bg-white w-full h-40 object-cover rounded'>
                                <p className="text-8xl font-bold text-purple-800">{course.course_name.charAt(0).toUpperCase()}</p>
                            </div>
                            <div className="text-left mt-4">
                                <Link to={`/course/${course.id}`} key={course.id} className=''>
                                    <h3 className="text-lg font-semibold hover:underline hover:text-purple-700">{course.course_name}</h3>
                                </Link>
                                <p className="text-gray-600 hover:underline">By {course.university}</p>
                                <p className="text-gray-600 hover:underline">Rating: {course.course_rating}</p>
                            </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className='text-2xl p-4 text-center text-red-500'>Loading courses... Please wait!!!</p>
        )}
            

        {/* <div className="flex flex-wrap justify-around">
            {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
            ))}
        </div> */}
    </div>
  )
}

export default AllCourses