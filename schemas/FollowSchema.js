const mongoose=require("mongoose");

const FollowSchema = new mongoose.Schema({
    followers:[{
        type:String,
        default:[]
    }],
    following:[{
        type:String,
        default:[]
    }],
    unfollowers:[{
        type:String,
        default:[]
    }],
    userId:{
        type:String
    }
})

const Follow = mongoose.model("Follow", FollowSchema);
module.exports=Follow;