const mongoose=require("mongoose");
const TitleSchema= new mongoose.Schema({
    title:{
        type:String,
        required:false
    },
    descript:{
        type:String,
        required:false
    },
    userId:{
        type:String
    }
})
const Titleinfo=mongoose.model("TITLEINFO",TitleSchema);
module.exports=Titleinfo;