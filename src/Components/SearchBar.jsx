import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

const SearchBar = ({ courses, onSearch }) => {
    // const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Filter courses based on the search query
        const filteredCourses = courses.filter(
          (course) =>
            course.course_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.course_rating.toLowerCase().includes(searchQuery.toLowerCase()) ||
            // Add more fields as needed for searching
            course.skills.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
        // Callback to parent component with the filtered courses
        onSearch(filteredCourses);
        // navigate('/search-page')
      };

  return (
    <div className='text-white'>
        <input 
            type="text" 
            className='border-2 w-96 -ml-10 border-gray-600 rounded-xl px-4 py-2 m-2' 
            placeholder='search for courses...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button onClick={handleSearch} className='btn-color rounded-xl px-4 py-2 hover:bg-white hover:border-2 hover:text-purple-700'>Search</button>
    </div>
  )
}

export default SearchBar