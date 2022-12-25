const mongoose = require('mongoose');

const ProfileViewSchema = new mongoose.Schema({
    viewedBy:[{
        type:String,
        default:[]
    }],
    userId:{
        type:String
    }
})

const ProfileViewedBy = mongoose.model("ProfileView",ProfileViewSchema);
module.exports=ProfileViewedBy;