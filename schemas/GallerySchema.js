const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
    images: [{
        image_id: {
            type:String
        },
        image_url:{
            type:String
        }
    }],
    userId:{
        type:String
    }
})

const Gallery= mongoose.model('GALLERY', GallerySchema);
module.exports=Gallery;