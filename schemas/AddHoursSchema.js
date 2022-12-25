const mongoose = require("mongoose");

const AddHoursSchema =  new mongoose.Schema({
    sunday:{
        opens_at: {
            type:String,
            default:""
        },
        closes_at:{
            type:String,
            default:""
        }
    },
    monday:{
        opens_at: {
            type:String,
            default:""
        },
        closes_at:{
            type:String,
            default:""
        }
    },
    tuesday:{
        opens_at: {
            type:String,
            default:""
        },
        closes_at:{
            type:String,
            default:""
        }
    },
    wednesday:{
        opens_at: {
            type:String,
            default:""
        },
        closes_at:{
            type:String,
            default:""
        }
    },
    thursday:{
        opens_at: {
            type:String,
            default:""
        },
        closes_at:{
            type:String,
            default:""
        }
    },
    friday:{
        opens_at: {
            type:String,
            default:""
        },
        closes_at:{
            type:String,
            default:""
        }
    },
    saturday:{
        opens_at: {
            type:String,
            default:""
        },
        closes_at:{
            type:String,
            default:""
        }
    },
    userId:{
        type:String
    }
})

const AddHours = mongoose.model("AddHours", AddHoursSchema);

module.exports = AddHours;