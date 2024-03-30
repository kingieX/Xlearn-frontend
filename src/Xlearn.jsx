import logo from "./assets/logo.svg";
import home from "./assets/home.png";
import Vector from "./assets/Vector.svg";
import { useNavigate } from "react-router-dom";

const Xlearn = () => {
  const navigate = useNavigate();

  const BackToHome = () => {
    navigate("/");
  }

  const HandleSignUp = () => {
    navigate("/register");
  }

  const HandleLogin = () => {
    navigate("/login");
  }

  return (
    <div>
      <div className="flex justify-between ml-7 mr-7">
        <img src={logo} alt="logo" onClick={BackToHome}/>
        <div className="">
          <button onClick={HandleLogin} className="font-medium">Login →</button>
          <button onClick={HandleSignUp} className="btn-color m-4 text-white font-medium px-2 py-1 rounded-lg">Sign Up</button>
        </div>
      </div>
      <div className="flex flex-row m-7 justify-between items-center">
        <div className="">
          <h3 className="pr-color font-medium text-lg">E-LEARNING PLATFORM</h3>
          <h1 className="text-5xl font-bold mb-4">Learning online made seamless and easy.</h1>
          <p className="text-lg mb-4">Gain insights and required knowledge and skills needed to strive in the world.</p>
          <div className="flex mb-10">
            <button onClick={HandleLogin} className="mr-6 font-bold">Sign In →</button>
            <button onClick={HandleSignUp} className="pr-color ml-6 font-bold">Learn more →</button>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex justify-center">
                <img src={Vector} alt="" width={20} /><span className="text-4xl font-bold">200+</span>
                </div>
              <p className="text-center">Hours of learning <br /> content</p>
            </div>
            <div className="ml-4">
              <div className="flex justify-center">
                <img src={Vector} alt="" width={20} /><span className="text-4xl font-bold">127+</span>
                </div>
              <p>Active Learners</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <img src={home} alt="" className="image"/>
        </div>
      </div>
    </div>
  )
}

export default Xlearn;