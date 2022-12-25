const express = require("express");


// const Experience = require("./schemas/ExperienceSchema");
// const Personalinfo = require("./schemas/PersonalinfoSchema");
// const Education = require("./schemas/EducationSchema");
// const GuestInfo = require("./schemas/GuestSchema");
// const Titleinfo = require("./schemas/TitleSchema");
// const Descinfo = require("./schemas/DescriptionSchema");
const UserInfo = require("./schemas/UserInfoSchema");
const User = require("./schemas/UserSchema");
// const LanCertInfo = require("./schemas/Languag+CetiSchema");
// const Wishlist = require("./schemas/WishlistSchema");
// const Review = require("./schemas/ReviewSchema");
const Post = require("./schemas/PostSchema");
// const Client = require("./schemas/ClientSchema");
// const Gallery = require("./schemas/GallerySchema");
// const AddWebsite = require("./schemas/AddWebsiteSchema");
const PERSONALINFO = require("./schemas/PersonalinfoSchema");
// const Conversation = require("./schemas/ConversationSchema");
// const Message = require("./schemas/MessageSchema");
// const ExperienceSearch = require("./schemas/ExperienceSearchSchema");
// const EducationSearch = require("./schemas/EducationSearchSchema");
// const LanguageSearch = require("./schemas/LanguageSearchSchema");
// const CourtSearch = require("./schemas/CourtSearchSchema");
// const ServiceCitySearch = require("./schemas/ServiceCitySearchSchema");
// const AddHours = require("./schemas/AddHoursSchema");
// const OpeningDate = require("./schemas/OpeningDateSchema");
// const MapSchema = require("./schemas/MapSchema");
// const OfficeAddress = require("./schemas/OfficeAddressSchema");
// const SocialLink = require("./schemas/SocialLinkSchema");
// const Follow = require("./schemas/FollowSchema");
// const Connect = require("./schemas/ConnectSchema");
const CompanyPage = require("./schemas/CompanyPageSchema");
const JobPost = require("./schemas/JobPostSchema");
// const PlaceSearch = require("./schemas/PlaceSearchSchema");
const JobSearch = require("./schemas/JobSearchSchema");
const Application = require("./schemas/ApplicationSchema");
const ProfileView = require("./schemas/ProfileViewSchema");
// const OfficeAddressSearch = require("./schemas/OfficeAddressSearchSchema");
// const AreaOfLaw = require("./schemas/AreaOfLawSchema");
// const JobRating = require("./schemas/JobRatingSchema");
const CompanyPost = require("./schemas/CompanyPostSchema");

const multer = require("multer");
// const SignUp=require("./schemas/SignUp");
// const Joi=require("joi");
// const {SignUp,validate}=require("./schemas/SignUp")
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const UploadApiResponse = require("cloudinary").UploadApiResponse;

router.get("/", (req, res) => {
  res.send("Hello world friend");
});



router.patch("/updatecomppage/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const updatecomppage = await CompanyPage.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    // console.log(updatecomppage);
    res.status(201).json(updatecomppage);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
});

router.patch("/updatepostlikes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { liked_by, likes_count } = req.body;
    const updatedpost = await Post.findByIdAndUpdate(
      id,
      { likes: { liked_by, likes_count } },
      { new: true }
    );
    // console.log(updatedpost);
    res.status(201).json(updatedpost);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
});

router.patch("/updatecompanypostlikes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { liked_by, likes_count } = req.body;
    const updatedpost = await CompanyPost.findByIdAndUpdate(
      id,
      { likes: { liked_by, likes_count } },
      { new: true }
    );
    // console.log(updatedpost);
    res.status(201).json(updatedpost);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
});

router.patch("/updatepostviews/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { viewed_by, views_count } = req.body;
    const updatedpost = await Post.findByIdAndUpdate(
      id,
      { views: { viewed_by, views_count } },
      { new: true }
    );
    // console.log(updatedpost);
    res.status(201).json(updatedpost);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
});

router.patch("/updatecompanypostviews/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { viewed_by, views_count } = req.body;
    const updatedpost = await CompanyPost.findByIdAndUpdate(
      id,
      { views: { viewed_by, views_count } },
      { new: true }
    );
    // console.log(updatedpost);
    res.status(201).json(updatedpost);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
});



router.patch("/updatecertificate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { certificate } = req.body;
    const updatecertificate = await LanCertInfo.findOneAndUpdate(
      { userId: id },
      { certificate },
      { new: true }
    );
    // console.log(updatecertificate);
    res.status(201).json(updatecertificate);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
});



router.patch("/addapplicationcategory/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatecategory = await Application.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // console.log(updatecategory);
    res.status(201).json(updatecategory);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
});



router.patch("/updateuserinfo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const { category } = req.body;
    const updateduserinfo = await UserInfo.findOneAndUpdate(
      { userId: id },
      { category},
      { new: true }
    );
   
    res.status(201).json(updateduserinfo);
  } catch (error) {
    
    res.status(404).json(error);
  }
});



router.patch("/updatecompfollowers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatecompfollowers = await CompanyPage.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    // console.log(updatecompfollowers);
    res.status(201).json(updatecompfollowers);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
});



router.delete("/deletepost/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deletePost = await Post.findByIdAndRemove(_id);
    res.status(201).json(deletePost);
  } catch (err) {
    // console.log(err);
    res.status(404).json(err);
  }
});



router.delete("/deletecomppage/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deletecomp = await CompanyPage.findByIdAndRemove(_id);
    res.status(201).json(deletecomp);
  } catch (err) {
    // console.log(err);
    res.status(201).json(deletecomp);
  }
});



router.get("/getUserinfo", async (req, res) => {
  try {
    const userdata = await Userinfo.find();
    res.status(201).json(userdata);
  } catch (error) {
    res.status(404).json(error);
  }
});


router.get("/getperson/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const personinfo = await PERSONALINFO.findById(id);
    // console.log(personinfo);
    res.status(201).json(personinfo);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/getpost/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const posts = await Post.find({ userId: _id });
    // console.log(posts);
    res.status(201).json(posts);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/getcompanypost/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const companyposts = await CompanyPost.find({ companyId: _id });
    // console.log(companyposts);
    res.status(201).json(companyposts);
  } catch (err) {
    res.status(404).json(err);
  }
});



router.get("/getallcompanypage", async (req, res) => {
  try {
    const comppage = await CompanyPage.find();
    // console.log(comppage);
    res.status(201).json(comppage);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getcompanypage/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comppage = await CompanyPage.find({ userId: id });
    // console.log(comppage);
    res.status(201).json(comppage);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getcomppage/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comppage = await CompanyPage.findById(id);
    // console.log(comppage);
    res.status(201).json(comppage);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/getjobsearch", async (req, res) => {
  try {
    const jobsearch = await JobSearch.find();
    // console.log(jobsearch);
    res.status(201).json(jobsearch);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getalljobposts", async (req, res) => {
  try {
    const jobposts = await JobPost.find();
    // console.log(jobposts);
    res.status(201).json(jobposts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getjobposts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const jobposts = await JobPost.find({ userId: id });
    // console.log(jobposts);
    res.status(201).json(jobposts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getcompjobposts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const jobposts = await JobPost.find({ companypage_id: id });
    // console.log(jobposts);
    res.status(201).json(jobposts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getapplications/:job_id", async (req, res) => {
  try {
    const { job_id } = req.params;
    const jobposts = await Application.find({ job_id });
    // console.log(jobposts);
    res.status(201).json(jobposts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getcomppage/:comp_id", async (req, res) => {
  try {
    const { comp_id } = req.params;
    const companypage = await CompanyPage.findById(comp_id);
    // console.log(companypage);
    res.status(201).json(companypage);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/getmycompanypage/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comppage = await CompanyPage.findOne({ userId: id });
    // console.log(comppage);
    res.status(201).json(comppage);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get("/getmyuserinfo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userinfo = await UserInfo.findOne({ userId: id });

    res.status(201).json(userinfo);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get("/getalluserinfos", async (req, res) => {
  try {
    const alluserinfos = await UserInfo.find();
 
    res.status(201).json(alluserinfos);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/getallapplications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allapplications = await Application.find({ userId: id });
  
    res.status(201).json(allapplications);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getjob/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const jobs = await JobPost.findById(id);
    // console.log(jobs);
    res.status(201).json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getallposts", async (req, res) => {
  try {
    const allposts = await Post.find();
    // console.log(allposts);
    res.status(201).json(allposts);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/getmyapplications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const apps = await Application.find({ userId: id });
    // console.log(apps);
    res.status(201).json(apps);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getjobrating/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await JobRating.findOne({ userId: id });
    res.status(201).json(rating);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.post("/post", (req, res) => {
  const { title, image, likes, views, link, tags, userId } = req.body;
  const postinfo = new Post({
    title,
    image,
    likes,
    views,
    link,
    tags,
    userId,
  });
  postinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err: "Failed to upload the post" }));
});

router.post("/companypost", (req, res) => {
  const { title, image, likes, views, link, tags, companyId } = req.body;
  const companypostinfo = new CompanyPost({
    title,
    image,
    likes,
    views,
    link,
    tags,
    companyId,
  });
  companypostinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err: "Failed to upload the post" }));
});









router.post("/createprofileview", (req, res) => {
  const { userId } = req.body;
  const createprofileview = new ProfileView({ userId });

  createprofileview
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
});

router.post("/companypage", (req, res) => {
  const {
    logo,
    name,
    website,
    industry,
    subindustry,
    city,
    state,
    country,
    companysize,
    companytype,
    userId,
  } = req.body;
  const companypage = new CompanyPage({
    logo,
    name,
    website,
    industry,
    subindustry,
    city,
    state,
    country,
    companysize,
    companytype,
    userId,
  });

  companypage
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
});

router.post("/jobpost", (req, res) => {
  const {
    jobtitle,
    workplacetype,
    joblocation,
    employees_no,
    company,
    jobtype,
    workingdays,
    workingtime,
    startdate,
    duration,
    salary,
    descript,
    hiringperson,
    screeningques,
    userId,
    companypage_id,
    hiringperson_id,
  } = req.body;

  const jobpost = new JobPost({
    jobtitle,
    workplacetype,
    joblocation,
    employees_no,
    company,
    jobtype,
    workingdays,
    workingtime,
    startdate,
    duration,
    salary,
    descript,
    hiringperson,
    screeningques,
    userId,
    companypage_id,
    hiringperson_id,
  });

  jobpost
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
});



router.post("/jobsearch", (req, res) => {
  const jobsearch = new JobSearch(req.body);

  jobsearch
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
});

router.post("/application", (req, res) => {
  const application = new Application(req.body);

  application
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
});



router.post("/userinfo", (req, res) => {
  const { category, userId } = req.body;
  const userinfo = new UserInfo({ category, userId});
  // const { category } = req.body;
  // console.log(category);
  // console.log(req.user._id);
//  console.log(`this is the cookie ${req.cookies.Mytoken}`);
  
  // const userinfo = new UserInfo({ category, userId: req.user._id });
 
  // const userinfo = new UserInfo({ category});

  userinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
});



module.exports = router;
