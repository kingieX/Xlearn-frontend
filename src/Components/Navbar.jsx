import logo from '../assets/logo.svg';
import Profile from '../assets/profile.png'
import Notification from '../assets/notification.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const BackToHome = () => {
        navigate("/");
      }

    const handleLogout = () => {
         // Call the logout function from the authentication context
      logout();

      navigate('/');
    }

  return (
    <div className='flex flex-row justify-between items-center px-8 py-2 border-2'>
        <img src={logo} alt="Logo" onClick={BackToHome} />
        <div className='flex gap-8 text-xl font-semibold'>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "pr-color underline" : "hover:underline hover:text-purple-800")}>Home</NavLink>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? "pr-color underline" : "hover:underline hover:text-purple-800")}>Courses</NavLink>
            <NavLink to="/mylists" className={({ isActive }) => (isActive ? "pr-color underline" : "hover:underline hover:text-purple-800")}>My Lists</NavLink>
        </div>
        <div className='flex flex-row justify-center text-white items-center gap-4'>
            <Link to='/notification' className='mt-2'>
                <img className='w-6 hover:w-7' src={Notification} alt="notification" />
            </Link>
            <div className='flex justify-center items-center btn-color rounded-full text-center text-white text-md font-semibold  hover:text-purple-700 hover:bg-white'>
                <Link to={'/profile'} >
                    <img src={Profile} alt="profile" className='profile rounded-full p-2'/>
                </Link>
            </div>
            <button 
                className='btn-color px-2 py-2 rounded-xl hover:text-purple-700 hover:bg-white hover:border-2 hover:border-gray-300'
                onClick={handleLogout}
            >
                Log out
            </button>
        </div>
    </div>
  )
}

export default Navbar