const express = require("express");
const {
    postEight,
    updateDescription
} = require("../controllers/descInfo.controller");

const router = express.Router();

/* reviews */

router.post("/eight", postEight);
router.patch("/updateinfo/descript/:_id",updateDescription);

module.exports = router;
