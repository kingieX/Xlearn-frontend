import { useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const RecommendedCourses = () => {
    const [courseName, setCourseName] = useState('');
    const [response, setResponse] = useState(null);
    // const [courses, setCourses] = useState([]);

    const handleInputChange = (e) => {
        setCourseName(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:8000/recommend', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ course_name: courseName }),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const responseData = await response.json();
          setResponse(responseData);
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
    };

  return (
    <div>
      <h2 className='text-left text-3xl font-bold ml-8'>Recommendations</h2>
        <form onSubmit={handleSubmit} className='flex justify-center text-white'>
            <input 
                type="text" 
                className='border-2 text-black w-96 -ml-10 border-gray-600 rounded-xl px-4 py-2 m-2' 
                placeholder='search for recommended courses...'
                value={courseName}
                onChange={handleInputChange} 
            />
          <button className='btn-color rounded-xl px-2 hover:bg-white hover:border-2 hover:text-purple-700'>Search</button>
        </form>

        {response && (
        <div className=''>
          {response.message ? (
            <div>
              {/* <p className='text-red-500 text-xl mt-3'>{response.message}...</p> */}
              <p className='text-red-500 text-xl mt-3'>Recommendation for this course is unavailable at the moment...</p>
            </div>
          ) : (
            <div>
              {response.recommended_courses.map((course, index) => (
                <div className='m-2 px-2 py-2 bg-gray-200 rounded-lg' key={index}>
                  <Link to={`/course/${index}`} key={index} className=''>
                    <p key={index} className='text-xl font-semibold'>{course}</p>
                  </Link>
                </div>
                
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default RecommendedCourses