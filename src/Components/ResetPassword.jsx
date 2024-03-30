
import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ResetPassword = () => {
    const navigate = useNavigate();

    const BackToHome = () => {
        navigate("/");
      }

      const formik = useFormik({
        initialValues: {
          email: '',
          old_password: '',
          new_password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string().required('Required'),
          old_password: Yup.string().required('Required'),
          new_password: Yup.string().required('Required'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
          try {
            const response = await axios.post('http://127.0.0.1:8000/change-password', values);
            console.log('Password changed successful:', response.data);
            // You can redirect or perform other actions upon successful login
            alert('Password changed successful, please login again')
            navigate("/login");
          } catch (error) {
            console.error('password change failed:', error.response.data);
            alert(error.response.data.detail);
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
            <h2 className='text-2xl font-semibold mb-5'>Reset password</h2>
            <div className='flex flex-row border-2 h-96 rounded-lg bg-gray-50'>
                {/* <img src={loginBg} alt="loginBg" className='image'/> */}
                <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center m-4'>
                    <input
                        type="email"
                        className='border-2 w-96 border-gray-400 rounded-md p-2 m-2'
                        placeholder='Enter Email'
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
                        placeholder='Old Password'
                        name="old_password"
                        value={formik.values.old_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.old_password && formik.errors.old_password && (
                    <div className='text-red-500 px-3 text-lg'>{formik.errors.old_password}</div>
                    )}

                    <input
                        type="password"
                        className='border-2 w-96 border-gray-400 rounded-md p-2 m-2'
                        placeholder='New Password'
                        name="new_password"
                        value={formik.values.new_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.new_password (<p className='text-sm -mt-2 text-red-500 text-center font-normal'>New password should contain both capital and small letters,<br /> number and symbol.</p>)} */}
                    {formik.touched.new_password && formik.errors.new_password && (
                    <div className='text-red-500 px-3 text-lg'>
                      <p className='text-sm -mt-2 text-red-500 text-center font-normal'>New password should contain both capital and small letters,<br /> number and symbol.</p>
                      {/* {formik.errors.new_password} */}
                    </div>
                    )}

                    <button 
                        type='submit' 
                        // disabled={formik.isSubmitting}
                        className='btn-color hover:bg-gray-300 hover:text-purple-700 text-white border-2 w-96 border-gray-400 rounded-md p-2 m-2'
                    >
                        Reset Password
                    </button>
                    <p className='text-sm text-center font-normal'>Don't have an account? <Link to='/register'><span className='font-medium hover:underline text-purple-700'>Sign up</span></Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword