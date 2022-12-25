const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const morgan = require("morgan");
// const route = require("./routes");
const cookieParser = require('cookie-parser');
const db = require('../server/config/mongoose');

const addHoursRouter = require("./routes/addHours.route");
const addWebsiteRouter = require("./routes/addWebsite.route");
const areaOfLawRouter = require("./routes/areaOfLaw.route");
const clientRouter = require("./routes/client.route");
const connectRouter = require("./routes/connect.route");
const conversationRouter = require("./routes/conversation.route");
const courtSearchRouter = require("./routes/courtSearch.route");
const descInfoRouter = require("./routes/descInfo.route");
const eduRouter = require("./routes/edu.route");
const eduSearchRouter = require("./routes/eduSearch.route");
const expRouter = require("./routes/exp.route");
const expSearchRouter = require("./routes/expSearch.route");
const followRouter = require("./routes/follow.route");
const galleryRouter = require("./routes/gallery.route");
const guestInfoRouter = require("./routes/guestInfo.route");
const jobRatingRouter = require("./routes/jobRating.route");
const lanCertInfoRouter = require("./routes/lanCertInfo.route");
const langSearchRouter = require("./routes/langSearch.route");
const mapSchemaRouter = require("./routes/mapSchema.route");
const messageRouter = require("./routes/message.route");
const officeAddressRouter = require("./routes/officeAddress.route");
const officeAddressSearchRouter = require("./routes/officeAddressSearch.route");
const openingDateRouter = require("./routes/openingDate.route");
const personalInfoRouter = require("./routes/personalInfo.route");
const placeSearchRouter = require("./routes/placeSearch.route");
const reviewRouter = require("./routes/review.route");
const serviceCitySearchRouter = require("./routes/serviceCitySearch.route");
const socialLinkRouter = require("./routes/socialLink.route");
const titleInfoRouter = require("./routes/titleInfo.route");
const wishlistRouter = require("./routes/wishlist.route");

const userRoute = require("./routes/user.route")


// cloudinary.config({
//   cloud_name:"ddpjwfnxb",
//   api_key:"531711249868649",
//   api_secret:"LljhpTzHNARTgaAU6cqSfy33OiQ"
// })

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

const DB = mongoose
  .connect(
    // "mongodb+srv://adarsh:ca@cluster0.lh56w3j.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://advo:adv@cluster0.ak7bzmj.mongodb.net/?retryWrites=true&w=majority"
    "mongodb://127.0.0.1:27017/fullvakil"
  )
  .then(() => {
    console.log("Connnection Successful");
  })
  .catch((err) => console.log("no connection"));

app.use(morgan("combined"));
app.use(require("./auth"));
// app.use("", route);

app.use("", addHoursRouter);
app.use("", addWebsiteRouter);
app.use("", areaOfLawRouter);
app.use("", clientRouter);
app.use("", connectRouter);
app.use("", conversationRouter);
app.use("", courtSearchRouter);
app.use("", descInfoRouter);
app.use("", eduRouter);
app.use("", eduSearchRouter);
app.use("", expRouter);
app.use("", expSearchRouter);
app.use("", followRouter);
app.use("", galleryRouter);
app.use("", guestInfoRouter);
app.use("", jobRatingRouter);
app.use("", lanCertInfoRouter);
app.use("", langSearchRouter);
app.use("", mapSchemaRouter);
app.use("", messageRouter);
app.use("", officeAddressRouter);
app.use("", officeAddressSearchRouter);
app.use("", openingDateRouter);
app.use("", personalInfoRouter);
app.use("", placeSearchRouter);
app.use("", reviewRouter);
app.use("", serviceCitySearchRouter);
app.use("", socialLinkRouter);
app.use("", titleInfoRouter);
app.use("", wishlistRouter);

app.use("", userRoute);

app.listen(4000, () => {
  console.log("Server is running");
});
