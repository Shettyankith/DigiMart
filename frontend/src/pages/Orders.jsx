import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import summaryAPI from "../common/index";
import formatDate from "../helper/formatDate";
import formatPrice from "../helper/currencyConverter";

function Orders() {
  const [order, setorder] = useState([]);

  const fetchOrderList = async () => {
    const response = await fetch(summaryAPI.orderList.url, {
      method: summaryAPI.orderList.method,
      credentials: "include",
    });
   
    const orders = await response.json();
    console.log("Ordered product",orders)
    setorder(orders.data);
  };

  useEffect(() => {
    fetchOrderList();
  }, []);
  return (
    <div className="container mx-auto bg-white">
      {order.length == 0 && (
        <p className="text-center font-medium text-xl mt-8 mb-0 pt-8">No orders</p>
      )}
      <div className="p-4 m-2 ">
        {order.map((order, index) => {
          return (
            <div key={index} className="border-b lg:m-5 lg:p-4 border-black">
              <p className="text-xl font-semibold mb-2 lg:text-2xl">{formatDate(order?.createdAt)}</p>
              {/* Product Details */}
              <div className="flex gap-1 flex-wrap">
                {order?.productDetails.map((product, index) => {
                  return (
                    <div className="flex gap-4 m-2 bg-slate-100 w-full lg:max-w-xs" key={index}>
                      <img
                        src={product?.image[0]}
                        alt="Product Image"
                        className="w-28 h-28 bg-slate-100 object-scale-down p-2 mix-blend-multiply shrink-0"
                      />
                      <div className="lg:p-2">
                        <div className="font-medium text-ellipsis line-clamp-1 text-lg">
                          {product?.name}
                        </div>
                        <div className="flex lg:items-center lg:gap-5 mt-2 flex-col lg:flex-row">
                          <div className="text-lg font-medium  text-red-500">
                            {formatPrice(product?.price)}
                          </div>
                          <p>Quantity:{product?.quantity}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 flex-col lg:flex-row p-2">
                {/* Payment details */}
                <div>
                  <h5 className="text-lg font-medium lg:text-2xl">Payment Details</h5>
                  <p className="ml-2 italic lg:text-xl">
                    Payment Method :{" "}
                    <span className="capitalize  font-medium text-green-500">
                      {order?.paymentDetails?.payment_method_type[0]}
                    </span>
                  </p>
                  <p className="ml-2 italic lg:text-xl">
                    Payment Status :{" "}
                    <span className="capitalize  font-medium text-green-500">
                      {order?.paymentDetails?.payment_status}
                    </span>
                  </p>
                </div>
                {/* Shipping Details */}
                <div>
                  <p  className="text-lg font-medium lg:text-2xl">Shiiping Details</p>
                  <p className="ml-2 italic lg:text-xl">Shipping Amount : <span className="capitalize  font-medium text-green-500">{formatPrice(100)} </span></p>
                </div>
              </div>
              {/* Total amount */}
              <div  className="text-lg font-medium lg:text-2xl mb-3 lg:mb-0">Total Amount : <span className="capitalize  font-medium text-green-500"> {formatPrice(order?.totalAmount)}</span></div>
             
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link to={"/"} className="text-center bg-red-500 p-2 text-white font-medium text-lg lg:text-xl mb-3 -mt-8 hover:bg-red-600 transition-all">Shop Now</Link>
      </div>
    </div>
  );
}

export default Orders;
