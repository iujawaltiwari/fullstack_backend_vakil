const mongoose = require('mongoose');

const LikesSchema = new mongoose.Schema({
    likes_count: {
        type: Number,
        default: 0
    },
    liked_by: [{type:String}]
})

const ClickSchema = new mongoose.Schema({
    views_count: {
        type: Number,
        default:0
    },
    viewed_by: [{type:String}]
})

const CompanyPostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    likes: LikesSchema,
    views: ClickSchema,
    tags:[{type:String}],
    link: {
        type:String
    },
    companyId: {type: String},
    uploaded_at:{
        type:String,
        default:Date.now()
    }
})

const CompanyPost = new mongoose.model("COMPANYPOST",CompanyPostSchema);
module.exports= CompanyPost;