const express = require("express");
const {
   postOne,
   getAllPer,
   getMyProfile,
   getPer,
   updateCover,
   updatePerInfo,
   updatePerName,
   updatePerPhone,
   updateInfoAdrs,
   updateProfile,
   updateInfoPhone
} = require("../controllers/personalInfo.controller");

const router = express.Router();

/* reviews */

router.post("/one", postOne);
router.get("/getallper", getAllPer);
router.get("/getmyprofile/:id", getMyProfile);
router.get("/getper/:id", getPer);
router.patch("/updateperinfo/:id", updatePerInfo);
router.patch("/updateperphone/:id", updatePerPhone);
router.patch("/updatepername/:id", updatePerName);
router.patch("/udpatecover/:_id", updateCover);
router.patch("/updateprofile/:_id", updateProfile);
router.patch("/updateinfo/address/:_id", updateInfoAdrs);
router.patch("/updateinfo/phone/:_id", updateInfoPhone);

module.exports = router;
