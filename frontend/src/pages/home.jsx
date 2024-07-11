import React, { useEffect, useState } from 'react'
import CategoryProduct from '../components/CategoryProduct'
import HorizontalCardProduct from "../components/HorizontalCard"
import Banner from "../components/Banner"
import VerticalCardProduct from "../components/VerticalCard"

function home() {
  
  return (
    <div>
      <CategoryProduct/>
      <Banner/>
      
      <HorizontalCardProduct category={"watches"} heading={"Time Elevated: Trending SmartWatches"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Mobile Mastery: Best Seller Mobiles"}/>
      <VerticalCardProduct category={"mouse"} heading={"Precision in Hand: Top-Rated Mice"}/>
      <HorizontalCardProduct category={"airpodes"} heading={"Wireless Freedom: Top Brand Airpods"}/>
      <VerticalCardProduct category={"speakers"} heading={"Sound Unleashed: Best in Class Speakers"}/>
      <VerticalCardProduct category={"televisions"} heading={"Visual Excellence: Top Picks in Televisions"}/>
      <HorizontalCardProduct category={"earphones"} heading={"Audio Bliss: Best Seller Earphones"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Cool Innovations: Top Refrigerators"}/>
      <VerticalCardProduct category={"camera"} heading={"Capture the Moment: Top Cameras"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Grooming Essentials: Best Trimmers"}/>
    </div>
  )
}

export default home