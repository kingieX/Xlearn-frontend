
import Navbar from './Components/Navbar'
import AllCourses from './Components/AllCourses'
// import SearchBar from './Components/SearchBar'


const Courses = () => {
  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center mt-4'>
          {/* <SearchBar /> */}
        </div>
        <div className='mt-4'>
          <AllCourses />
        </div>
    </div>
  )
}

export default Courses