const mongoose=require("mongoose");
const GuestSchema= new mongoose.Schema({
    enrollmentno:{
        type:String,
        required:false
    },
    membershipno:{
        type:String,
        required:false
    },
    servicecity:[{
        type:String,
        required:false
    }],
    visitingcourt:[{
        type:String,
        required:false
    }],
    wardno:{
        type:String,
        required: false
    },
    userId:{
        type:String
    }
})
const GuestInfo=mongoose.model("GUESTINFO",GuestSchema);
module.exports=GuestInfo;