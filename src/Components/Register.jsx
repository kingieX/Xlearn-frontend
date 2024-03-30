import logo from '../assets/logo.svg';
// import registerBg from '../assets/registerBg.png';
// import google from '../assets/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const BackToHome = () => {
        navigate("/");
      }

      const formik = useFormik({
        initialValues: {
          fullname: '',
          username: '',
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          fullname: Yup.string().required('Required'),
          username: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
          try {
            const response = await axios.post('http://127.0.0.1:8000/signup', values, {
              withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log('Signup successful:', response.data);
            const { access_token: accessToken, user_id: userId } = response.data;
            login(accessToken, userId);
            // You can redirect or perform other actions upon successful signup
            navigate("/home");
          } catch (error) {
            console.error('Signup failed:', error.response.data);
            setErrors(error.response.data); // Set backend errors to display on the form
          } finally {
            setSubmitting(false);
          }
        },
      });
    

    return (
        <div>
            <div className='m-5'>
                <img src={logo} alt="Logo" onClick={BackToHome} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl font-semibold mb-3'>Sign up to begin</h2>
                <div className='flex flex-col border-2 h- bg-gray-50 rounded-lg mb-10'>
                    {/* <img src={registerBg} alt="loginBg" className='image'/> */}
                    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center m-4'>
                    <input
                            type="text"
                            className='border-2 w-96 border-gray-400 rounded-md p-2 m-2'
                            placeholder='Full Name'
                            name="fullname"
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.fullname && formik.errors.fullname && (
                        <div className='text-red-500 px-3 text-lg'>{formik.errors.fullname}</div>
                        )}
                        <input
                            type="text"
                            className='border-2 w-96 border-gray-400 rounded-md p-2 m-2'
                            placeholder='Username'
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username && (
                        <div className='text-red-500 px-3 text-lg'>{formik.errors.username}</div>
                        )}

                        <input
                            type="email"
                            className='border-2 w-96 border-gray-400 rounded-md p-2 m-2'
                            placeholder='Email'
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                        <div className='text-red-500 px-3 text-lg'>{formik.errors.email}</div>
                        )}

                        <input
                            type="password"
                            className='border-2 w-96 border-gray-400 rounded-md p-2 m-2'
                            placeholder='Password'
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.password && formik.errors.password && (
                        <div className='text-red-500 px-3 text-lg'>{formik.errors.password}</div>
                        )}
                        <br />

                        <button 
                            type='submit' 
                            className='btn-color hover:bg-gray-300 hover:text-purple-700 text-white border-2 w-96 border-gray-400 rounded-md p-2 m-2'>
                            {/* disabled={formik.isSubmitting} */}
                            Sign up
                        </button>
                        <p className='text-sm text-center font-normal'>Already have an account? <Link to='/login'><span className='font-medium hover:underline text-purple-700'>Sign in</span></Link></p>
                        {/* <p className='text-center font-medium m-4'>Or</p>
                        <span className='flex justify-center items-center border-2'>
                            <img src={google} alt="google" className='google' />
                            <p className='m-4 text-lg font-medium'>Google Account</p>
                        </span> */}
                    </form>

                    {/* <div className='flex flex-col justify-center items-center m-4'>
                        <input type="text" placeholder='Email' className='border-2 w-96 border-gray-400 rounded-md p-2 m-2' />
                        <input type="password" placeholder='Password' className='border-2 w-96 border-gray-400 rounded-md p-2 m-2' />
                        <button type='submit' className='btn-color hover:bg-gray-500 text-white border-2 w-96 border-gray-400 rounded-md p-2 m-2'>Login</button>
                        
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

export default Register;