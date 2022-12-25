const express = require("express");
const {
    postFive,
    getRegInfo,
    updateWardNo,
    updateServiceCity,
    updateDetails,
    updateInfo
} = require("../controllers/guestInfo.controller");

const router = express.Router();

/* reviews */

router.post("/five", postFive);
router.get("/getreginfo/:_id", getRegInfo);
router.patch("/updatewardno/:id", updateWardNo);
router.patch("/updateservicecity/:id",updateServiceCity);
router.patch("/updatedetails/:_id",updateDetails);
router.patch("/updateinfo/ward/:_id",updateInfo);

module.exports = router;
