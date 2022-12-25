const express = require("express");
const {
  getAllReviews,
  postReview,
  updateReview,
  updateMyReview,
  deleteReview,
  getReview
} = require("../controllers/review.controller");

const router = express.Router();

/* reviews */

router.get("/reviews/:ownId", getAllReviews);
router.post("/review", postReview);
router.patch("/updatereview/:_id/:owner_id",updateReview );
router.patch("/updatemyreview/:_id/:owner_id",updateMyReview);
router.delete("/deletereview/:_id/:owner", deleteReview);
router.get("/getreview/:ownId/:userId", getReview);
module.exports = router;
