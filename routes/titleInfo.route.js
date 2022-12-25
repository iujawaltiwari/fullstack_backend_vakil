const express = require("express");
const {
    postSeven,
    getTitle,
    updateDescript,
    updateTitle,
    updateInfo
} = require("../controllers/titleInfo.controller");

const router = express.Router();

/* reviews */

router.post("/seven", postSeven);
router.get("/gettitle/:_id", getTitle);
router.patch("/updatetitle/:_id",updateTitle);
router.patch("/updatedescript/:_id",updateDescript);
router.patch("/updateinfo/title/:_id",updateInfo);

module.exports = router;
