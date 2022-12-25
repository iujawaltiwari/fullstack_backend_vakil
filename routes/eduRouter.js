const express = require("express");
const router = express.Router();
const {
  deleteedu,
  updateedu,
  getedu,
  getedusearch,
  two,
} = require("../controllers/edu.controller");
router.delete("/deleteedu/:_id", deleteedu);
router.patch("/updateedu/:_id", updateedu);
router.get("/getedu/:id", getedu);
router.get("/getedusearch", getedusearch);
router.post("/two", two);

module.exports = router;
