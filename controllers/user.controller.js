const User = require("../schemas/UserSchema");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');



// These id's and secrets should come from .env file.
// const CLIENT_ID = '220416142491-0a1rhuohk9cbjic7n2ojdkgu83p3o6ut.apps.googleusercontent.com';
// const CLEINT_SECRET = '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';
const CLIENT_ID = "1080512323-7akro7qrabirog170lf13domktumo9cu.apps.googleusercontent.com";

const CLIENT_SECRET =  "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";

// userSchema.methods.getJWTToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

// pos

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};

// Create Token and saving in cookie
const sendToken = (user, statusCode, res) => {
  const token = createToken(user._id);

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + maxAge
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("Mytoken", token, options).json({
    success: true,
    user,
    token,
  });
};

// controller actions
//google auth


module.exports.login_get = (req, res) => {
  res.render('login');
}



module.exports.login_post = async (req, res) => {

  try {
    const { email } = req.body;
    console.log(email)
    
    const user = await User.create({
        email,
        // emailToken: crypto.randomBytes(64).toString('hex'),
        // isVerified: false
    })
    console.log(user)
    // const newUser = await user.save()

    // createToken(newUser._id);


    sendToken(user,201,res);
    // console.log(`this is the cookie ${req.cookies.Mytoken}`);
  

    res.redirect('/')

    res.status(201).json({
      success: true,
      user,
    });
  } 
  catch (err) {
    console.log(err)
  }

}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}