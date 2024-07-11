const Order=require("../../models/order")

const orderList=async(req,res)=>{
    try{
       const userId=req.userId;
       const userOrderList=await Order.find({userId:userId}).sort({createdAt:-1});
      
       res.json({
        error:false,
        success:true,
        data:userOrderList,
        message:"User order list fetched",
       });
    } catch(e){
        res.status(400).json({
            error:true,
            success:false,
            message:e.message||"Internal server error!!",
        })
    }
}

module.exports=orderList;