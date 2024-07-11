import React from 'react'
import image from "../assest/cancel.gif"
import {Link} from "react-router-dom"

function PaymentCancel() {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col m-4 rounded-md'>
    <img src={image} alt="Payment cancel image" width={250} height={250} className='mix-blend-multiply'/>
    <p className='text-red-500 font-bold text-2xl p-3'>Payment Cancel</p>
    <Link to={"/cart"} className='bg-red-500 text-white font-semibold p-3 m-4 text-lg hover:bg-transparent hover:border-2 hover:border-red-500 hover:text-red-500 rounded transition-all'>Got To Cart</Link>
</div>
  )
}

export default PaymentCancel