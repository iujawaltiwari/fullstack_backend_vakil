const express = require("express");
const {
  getAllReviews,
  postReview,
} = require("../controllers/review.controller");

const router = express.Router();

/* reviews*/
router.get("/reviews/:ownId", getAllReviews);
router.post("/review", postReview);

module.exports = router;
