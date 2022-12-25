const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name:{
    type: String,
   //  required: true,
   },
   email:{
    type: String,
    required: true,
   },
   image:{
    type: String,
   //  required: true,
   },
   emailVerified:{
    type: Boolean,
   }

})

const User = mongoose.model("User", UserSchema);
module.exports=User;