const mongoose=require("mongoose");
const MapSchema=new mongoose.Schema({
    longitude:Number,
    latitude:Number
})
const Maps=mongoose.model("MAPS",MapSchema);
module.exports=Maps;