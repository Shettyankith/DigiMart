import React from 'react'
import image from "../assest/success.gif"
import {Link} from "react-router-dom"

function PaymentSuccess() {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col m-4 rounded-md'>
        <img src={image} alt="Payment success image" width={250} height={250}/>
        <p className='text-green-500 font-bold text-2xl p-3'>Payment Successfull</p>
        <Link to={"/orders"} className='bg-green-500 text-white font-semibold p-3 m-4 text-lg hover:bg-transparent hover:border-2 hover:border-green-500 hover:text-green-500 rounded transition-all'>See Order</Link>
    </div>
  )
}

export default PaymentSuccess