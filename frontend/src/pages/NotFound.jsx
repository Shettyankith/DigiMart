import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  return (
    <div className='flex justify-center items-center pt-10 flex-col'>
        <h1 className='text-2xl text-black font-medium m-3'>Oops! Page Not Found</h1>
        <p className='text-2xl text-black font-medium m-3'>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link  className="mt-4 bg-red-600 text-white font-medium w-fit p-2 text-xl hover:bg-red-700" to={"/"}> Back To Home</Link>
    </div>
  )
}

export default NotFound