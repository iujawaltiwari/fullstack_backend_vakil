const express = require("express");
const {
    postTwo,
    getEdu,
    deleteEdu,
    updateEdu

} = require("../controllers/edu.controller");

const router = express.Router();

/* reviews */

router.post("/two", postTwo);
router.get("/getedu/:id", getEdu);
router.patch("/updateedu/:_id",updateEdu);
router.delete("/deleteedu/:_id", deleteEdu);

module.exports = router;
