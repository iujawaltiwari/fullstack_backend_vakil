const express = require("express");
const {
    CreateFollowList,
    getFollowList,
    updateFollowList
} = require("../controllers/follow.controller");

const router = express.Router();

/* reviews */

router.post("/createfollow", CreateFollowList);
router.get("/getfollowlist/:id", getFollowList);
router.patch("/updatefollowlist/:_id",updateFollowList);

module.exports = router;
