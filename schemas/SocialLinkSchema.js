const mongoose = require("mongoose");

const SocialLinkSchema = new mongoose.Schema({
    instagram:{
        type:String
    },
    facebook:{
        type:String
    },
    pinterest:{
        type:String
    },
    twitter:{
        type:String
    },
    mywebsite:{
        type:String
    },
    userId:{
        type:String
    }
})

const SocialLink = mongoose.model("SocialLink",SocialLinkSchema);

module.exports=SocialLink;