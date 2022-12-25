const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const Joi=require("joi");
const passwordComplexity=require("joi-password-complexity")

const SignUpSchema =new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
SignUpSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this_id},secret123);
    return token;
}
const SignUp=mongoose.model("SignUp",SignUpSchema);
const validate=(data)=>{
    const schema=Joi.object({
    name:Joi.string().required().label("Name"),
    email:Joi.string().email.required().label("Email"),
    password: passwordComplexity().required().label("Password")

});
return schema.validate(data);
};
module.exports={SignUp,validate};
