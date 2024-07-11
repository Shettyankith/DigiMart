import React, { useEffect, useRef, useState,useContext } from "react";
import fetchCategoryProducts from "../helper/fetchCategoryProducts";
import formatPrice from "../helper/currencyConverter";
import { Link } from "react-router-dom";
import addToCart from "../helper/addToCart";
import context from "../context";

const VerticalCardProduct = ({category, heading}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)

    const scrollElement = useRef()
    const Context=useContext(context);

    const handleAddToCart = async(e,id)=>{
       await addToCart(e,id)
       Context.fetchCartCount();
    }

    const fetchData = async() =>{
        setLoading(true)
        const categoryProduct = await fetchCategoryProducts(category)
        setLoading(false)
        setData(categoryProduct?.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const scrollRight = () =>{
        scrollElement.current.scrollLeft += 300
    }
    const scrollLeft = () =>{
        scrollElement.current.scrollLeft -= 300
    }


  return (
    <div className='container mx-auto px-4 my-6 relative'>

            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

                
           <div className='flex items-center gap-4 md:gap-6 overflow-x-scroll scroller transition-all' ref={scrollElement}>

            <button  className='rounded-full  absolute left-0 text-lg hidden md:block z-20' onClick={scrollLeft}><i className="fa-solid fa-circle-chevron-left text-red-600 text-2xl"></i></button>
            <button  className=' rounded-full  absolute right-0 text-lg hidden md:block z-20' onClick={scrollRight}> <i className="fa-solid fa-circle-chevron-right text-red-600 text-2xl hidden md:block"></i></button> 

           {

                loading ? (
                    loadingList?.map((product,index)=>{
                        return(
                            <div
              className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white shadow-sm "
              key={index}
            >
              <div className="bg-slate-200 p-2 h-48 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse">
                
              </div>
              <div className="p-4 grid gap-3 animate-pulse">
                <h2 className="font-medium text-ellipsis line-clamp-1 text-xl bg-slate-100 p-2">
                  {product?.productName}
                </h2>
                <p className="capitalize text-slate-500 font-semibold bg-slate-100 p-2">
                  {product?.category}
                </p>
                <div className="flex gap-3 text-lg font-semibold w-full">
                  <p className="text-red-500 font-medium bg-slate-100 p-2 w-full">
                   
                  </p>
                  <p className="text-slate-500 line-through bg-slate-100 p-2 w-full">
                    
                  </p>
                </div>
                <button className="bg-slate-100 p-3 transition-all text-sm rounded text-white font-medium">
                 
                </button>
              </div>
            </div>
                        )
                    })
                ) : (
                    data?.map((product,index)=>{
                        return(
                            <Link to={"product/"+product?._id} className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white shadow-sm " onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} key={index}>
                                <div className="bg-slate-200 p-2 h-48 min-w-[280px] md:min-w-[145px] flex justify-center items-center">
                                    <img src={product.productImage[0]} alt="Product Image" className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"/>
                                </div>
                                <div className="p-4 grid gap-3">
                                    <h2 className="font-medium text-ellipsis line-clamp-1 text-xl">{product?.productName}</h2>
                                    <p className="capitalize text-slate-500 font-semibold">{product?.category}</p>
                                    <div className="flex gap-3 text-lg font-semibold">
                                        <p className="text-red-500 font-medium">{ formatPrice(product?.sellingPrice) }</p>
                                        <p className="text-slate-500 line-through">{ formatPrice(product?.price)  }</p>
                                    </div>
                                    <button className="bg-red-500 hover:bg-red-600 transition-all p-1 text-sm rounded text-white font-medium" onClick={(e)=>handleAddToCart(e,product?._id)}>Add to Cart</button>
                                </div>
                            </Link>
                        )
                    })
                )
                
            }
           </div>
            

    </div>
  )
}

export default VerticalCardProduct