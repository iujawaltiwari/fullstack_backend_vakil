const express = require("express");
const {
    postJobRating,
    updateJobRating
} = require("../controllers/jobRating.controller");

const router = express.Router();

/* reviews */

router.post("/createjobrating", postJobRating);
router.patch("/updatejobrating/:id",updateJobRating);

module.exports = router;
