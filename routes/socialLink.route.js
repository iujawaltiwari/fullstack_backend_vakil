const express = require("express");
const {
    postEleven,
    getSocialLink,
    updateSocialLink
} = require("../controllers/socialLink.controller");

const router = express.Router();

/* reviews */

router.post("/eleven", postEleven);
router.get("/getsociallinks/:id", getSocialLink);
router.patch("/updatesociallinks/:id",updateSocialLink);

module.exports = router;
