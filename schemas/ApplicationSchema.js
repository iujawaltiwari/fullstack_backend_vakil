const mongoose = require('mongoose');

const answerSchema =  new mongoose.Schema({
    ques:{
        type:String,
        default:""
    },
    ans:{
        type:Number,
        default:""
    }
})

const ApplicationSchema = new mongoose.Schema({
    resume:{
        pdf_id:{
            type:Object
        },
        pdf_url:{
            type:String
        }
    },
    answers:[answerSchema],
    userId:{
        type:String
    },
    hiringperson_id:{
        type:String
    },
    job_id:{
        type:String
    },
    companypage_id:{
        type:String,
        default:""
    },
    date:{
        type:String,
        default:Date.now()
    },
    category:{
        type:String,
        default:""
    }
})

const Application = mongoose.model('Application', ApplicationSchema);
module.exports=Application;