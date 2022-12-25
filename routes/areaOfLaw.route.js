const express = require("express");
const {
    postAreaOfLaw,
    getMyAreaOfLaws,
    getAllAreaofLaws,
    updateWebsite
} = require("../controllers/areaOfLaw.controller");

const router = express.Router();

/* reviews */

router.post("/areaoflaws", postAreaOfLaw);
router.get("/getallareaoflaws", getAllAreaofLaws);
router.get("/getmyareaoflaws/:id",getMyAreaOfLaws);
router.patch("/updatewebsitelink/:id",updateWebsite);
module.exports = router;
