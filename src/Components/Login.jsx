import logo from '../assets/logo.svg';
import { useAuth } from '../AuthContext';
import { useState } from 'react';
// import google from '../assets/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [userId, setUserId] = useState('');

    const BackToHome = () => {
        navigate("/");
      }

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
          try {
            const response = await axios.post('http://127.0.0.1:8000/login', values, {
              withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log('Login successful:', response.data);
            const { access_token: accessToken, user_id: userId } = response.data;
            login(accessToken, userId);
            // You can redirect or perform other actions upon successful login
            navigate("/home");
          } catch (error) {
            console.error('Login failed:', error.response.data);
            alert(error.response.data.detail);
            alert('Login failed, change your password')
            // return <div>{error.response.data.detail}</div>
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
            <h2 className='text-2xl font-semibold mb-5'>Login to continue</h2>
            <div className='flex flex-row border-2 h-96 px-4 rounded-lg bg-gray-50 mb-10'>
                {/* <img src={loginBg} alt="loginBg" className='image'/> */}
                <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center my-8'>
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

                    <p className='text-sm text-purple-700 mr-5 text-right font-medium hover:underline'>
                      <Link to='/forgot-password'>Forgotten password</Link>
                    </p>

                    <button 
                        type='submit' 
                        // disabled={formik.isSubmitting}
                        className='btn-color hover:bg-gray-300 hover:text-purple-700 text-white border-2 w-96 border-gray-400 rounded-md p-2 m-2'
                    >
                        Login
                    </button>
                    <p className='text-sm text-center font-normal'>Don't have an account? <Link to='/register'><span className='font-medium hover:underline text-purple-700'>Sign up</span></Link></p>
                    {/* <p className='text-center font-medium m-4'>Or</p> */}
                    
                    {/* <span className='flex justify-center items-center border-2'>
                        <img src={google} alt="google" className='google' />
                        <p className='m-4 text-lg font-medium'>Google Account</p>
                    </span> */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;