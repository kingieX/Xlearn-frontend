import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import AllCourses from './Components/AllCourses';
import axios from 'axios';
import RecommendedCourses from './Components/RecommendedCourses';



const Home = () => {
  // const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  // const handleSearch = (filteredCourses) => {
  //   setFilteredCourses(filteredCourses);
  // };

  const handleSearch = (searchQuery) => {
    const lowercaseQuery = searchQuery.toLowerCase();
  
    if (lowercaseQuery.trim() === '') {
      // If search query is empty, display all courses
      setFilteredCourses(allCourses);
    } else {
      // Filter courses based on the search query
      const filteredCourses = allCourses.filter((course) => {
        course.course_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.course_rating.toLowerCase().includes(searchQuery.toLowerCase()) ||
            // Add more fields as needed for searching
            course.skills.toLowerCase().includes(searchQuery.toLowerCase())
        return course.course_name.includes(lowercaseQuery) || course.university.includes(lowercaseQuery);
      });
  
      setFilteredCourses(filteredCourses);
    }
  };

  // const fetchRecommendedCourses = async () => {
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/recommend');
  //     setRecommendedCourses(response.data.recommended_courses);
  //   } catch (error) {
  //     console.error('Error fetching recommended courses:', error);
  //   }
  // };

  useEffect(() => {
    // Fetch all courses from your backend API
    const fetchAllCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/courses');
        setAllCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchAllCourses();
    // fetchRecommendedCourses();
  }, []);

  

  return (
    <div>
      <Navbar />
      {/* <div className='flex flex-row justify-between items-center text-center p-4'>
        <h1 className='pl-5 text-3xl font-bold'>Start Learning</h1>
        <SearchBar courses={allCourses} onSearch={handleSearch} />
        <p className='pr-color font-semibold text-sm pt-5 mr-5'></p>
      </div> */}

      <div className='p-4'>
        <RecommendedCourses />
      </div>
      <AllCourses courses={filteredCourses.length > 0 ? filteredCourses : allCourses} />
      {/* {filteredCourses.length > 0 ? (
        <AllCourses courses={filteredCourses} />
      ) : (
        <p>No courses found.</p>
      )} */}
    </div>
  )
}

export default Home