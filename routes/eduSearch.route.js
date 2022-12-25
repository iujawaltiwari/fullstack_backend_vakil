const express = require("express");
const {
    postEduSrc,
    getEduSrc
} = require("../controllers/eduSearch.controller");

const router = express.Router();

/* reviews */

router.post("/eduSearch", postEduSrc);
router.get("/getedusearch", getEduSrc);

module.exports = router;
