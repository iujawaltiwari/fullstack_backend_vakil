const mongoose = require('mongoose');

const UserInfoSchema = new mongoose.Schema({
    category:[{
        type:String
    }],
    userId:{
        type:String
        // type: mongoose.Schema.ObjectId,
        // ref: "User",
        

    }
})

const UserInfo = mongoose.model("UserInfo", UserInfoSchema);
module.exports=UserInfo;