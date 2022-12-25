const mongoose=require("mongoose");

const LanCertSchema = new mongoose.Schema({
    language: [{type:String}],
    certificate:[{
        certificate_img:{
            img_id: {type:String},
            img_url: {type:String}
        },
        certificate_name:{
            type:String
        },
        certificate_date:{
            type:String,
            default: Date.now()
        }
    }],
    userId:{
        type:String
    }
})

const LanCertInfo=mongoose.model("LANCERTINFO",LanCertSchema);
module.exports=LanCertInfo;