import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Xlearn from "./Xlearn";
import Home from "./Home";
import Courses from "./Courses";
import MyLists from "./MyLists";
import ResetPassword from "./Components/ResetPassword";
import CourseDetails from "./Components/CourseDetails";
import Profile from "./Profile";
import Notification from "./Notification";
import Footer from "./Components/Footer";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Xlearn />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ResetPassword />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route exact path="/course/:id" element={<CourseDetails />} />
            <Route exact path="/mylists" element={<MyLists />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/notification" element={<Notification />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </AuthProvider>
    )
}

export default App;