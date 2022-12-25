const mongoose=require("mongoose");

const WishlistSchema= new mongoose.Schema({
    items:[{type: String}],
    userId:{
        type:String,
    }
})
const Wishlist= mongoose.model("WISHLIST",WishlistSchema);
module.exports=Wishlist;