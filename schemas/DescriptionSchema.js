const mongoose=require("mongoose");
const DescSchema= new mongoose.Schema({
    descript:{
        type:String,
        required:false
    }
})
const Descinfo=mongoose.model("DESCINFO",DescSchema);
module.exports=Descinfo;