const mongoose = require("mongoose");
const PersonalinfoSchema = new mongoose.Schema({
  profile_img:{
    img_id: {
      type:String
    },
    img_url:{
      type:String
    }
  },
  cover_img:{
    img_id: {
      type:String,
      default:""
    },
    img_url:{
      type:String,
      default:""
    }
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country:{
    type:String,
    required:true
  },
  ZipCode: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  userId:{
    type:String
  },
  date:{
    type:String,
    default: Date.now()
  },
});
const Personalinfo = mongoose.model("PERSONALINFO", PersonalinfoSchema);
module.exports = Personalinfo;
