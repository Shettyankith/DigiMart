const Order=require("../../models/order");
const User=require("../../models/user")

const allOrder=async(req,res)=>{
    const userId = req.userId;
    const userDetail=await User.findById(userId);
    if(userDetail.role!=="ADMIN"){
        return res.status(500).json({
            mesaage:"Unauthorized!..",
            success:false,
            error:true,
        });
    }
    const AllOrder=await Order.find().sort({createdAt:-1});
    return res.status(200).json({
        success:true,
        error:false,
        data:AllOrder,
    });
}

module.exports=allOrder;