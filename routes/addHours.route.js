const express = require("express");
const {
    getAddHours,
    postAddHours,
    updateHours
} = require("../controllers/addHours.controller");

const router = express.Router();

/* reviews */

router.get("/gethours/:id", getAddHours);
// router.get("/gethours/:id", getAddHours);
router.post("/addhours",  postAddHours);
router.patch("/updatehours/:id",updateHours);
module.exports = router;
