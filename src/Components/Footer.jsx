
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center btn-color text-white p-5'>
      <div className='flex flex-col sm:flex-row justify-between items-start mb-2 gap-3 mx-1 lg:mx-10'>
        <div className='flex flex-col justify-center items-start ml-5'>
          <h2 className='font-medium text-lg'>Product</h2>
        </div>
        <div className='flex flex-col justify-center items-start ml-5'>
          <h2 className='font-medium text-lg sm:mb-3'>Company</h2>
          <ul className='sm:flex-col sm:gap-0'>
            <li className='lg:mb-2 hover:underline'><Link to='/about'>About us</Link></li>
            <li className='lg:mb-2 hover:underline'><Link to='/ourTeam'>Our Team</Link></li>
            <li className='lg:mb-2 hover:underline'><Link to='/testimonials'>Testimonials</Link></li>
            <li className='lg:mb-2 hover:underline'><Link to='/privacy'>Privacy Policy</Link></li>
            <li className='lg:mb-2 hover:underline'><Link to='/terms'>Terms of service</Link></li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-start ml-5'>
          <h2 className='font-medium text-lg sm:mb-3'>Resources</h2>
          <ul className='sm:flex-col sm:gap-0'>
            <li className='lg:mb-2 hover:underline'><Link to='/FAQs'>FAQs</Link></li>
            <li className='lg:mb-2 hover:underline'><Link to='/benefits'>Benefits</Link></li>
            <li className='lg:mb-2 hover:underline'><Link to='blog'>Blog</Link></li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-start ml-5'>
          <h2 className='font-medium text-lg sm:mb-3'>Contact</h2>
          <ul className='sm:flex-col sm:gap-0'>
            <li className='lg:mb-2 hover:underline'><Link to='/contact'>Contact page</Link></li>
            <div>
              <li className='lg:mb-2'>Office:</li>
              <li>Alex Ekwueme Federal University, <br /> Ndufu Alike Ikwo, <br />Ebonyi state, Nigeria.</li>
              <li>(+234) 810 913 4162</li>
              <li>(+234) 806 938 0380</li>
            </div>
          </ul>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p>copyright of</p>
        <img src={Logo} alt="logo" className='w-28 mt-2 mb-2' />
        <p className='text-lg font-semibold'>Created by Slanconcept.io</p>
      </div>
    </footer>
  )
}

export default Footer