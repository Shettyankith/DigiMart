const User = require("../../models/user");
const stripe=require("../../config/stripe")


const paymentController = async (req, res) => {
  try {
   
    const { cartItems } = req.body;

    const user = await User.findById(req.userId);

    const params = {
      submit_type: 'pay',
      mode: "payment",
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        {
          shipping_rate: "shr_1PZPLpAx9U83iPPbEFHYmIKU",
        },
      ],
      customer_email: user.email,
      metadata:{
        userId:req.userId,
      },
      line_items: cartItems.map((item, index) => {
        return {
          price_data: {
            currency: 'inr',
            product_data: {
              name: item.productId.productName,
              images: item.productId.productImage, 
              metadata: {
                productId: item.productId._id,
              }
            },
            unit_amount: item.productId.sellingPrice*100 , 
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    };

    const session = await stripe.checkout.sessions.create(params);
   
    res.status(200).json({
      error: false,
      success: true,
      data: session,
    });
  } catch (e) {
    res.status(400).json({
      error: true,
      success: false,
      message: e.message || "Internal server error!!",
    });
  }
};

module.exports = paymentController;