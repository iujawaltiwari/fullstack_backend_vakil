const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    review: {
        type: String
    },
    reply:{
        type: String
    },
    reply_time:{
        type:String,
        default: Date.now()
    },
    userId:{
        type:String,
    },
    posted_at:{
        type: Date,
        default: Date.now()
    },
    review_on:{
        type:'String',
    }, 
    rating:{
        type: Number
    }
})

const Review = mongoose.model('REVIEW', ReviewSchema);

module.exports=Review;