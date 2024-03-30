import React from 'react';
import Navbar from './Components/Navbar';

const MyLists = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center p-4'>
          <h1 className='text-5xl font-semibold mb-2'>My Learning path</h1>
          <p className='text-xl mb-2'>Organize, access and control your learning more faster!</p>
        </div>
        <div className='px-4 mb-10'>
          <h1 className='text-3xl font-semibold'>+ My Lists</h1>
        </div>
    </div>
  )
}

export default MyLists;