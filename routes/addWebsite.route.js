const express = require("express");
const {
    getWebsite,
    postWebsite,
    updateWebsite
} = require("../controllers/addWebsite.controller");

const router = express.Router();

/* reviews */

router.post("/addwebsite/:id", postWebsite);
router.get("/getwebsite/:id", getWebsite);
router.patch("/updatewebsitelink/:id",updateWebsite);
module.exports = router;
