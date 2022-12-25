const express = require("express");
const {
    postLangSearch,
    getAllLang,
    updateLang
    
} = require("../controllers/langSearch.controller");

const router = express.Router();

/* reviews */

router.post("/langsearch/:_id", postLangSearch);
router.get("/getalllang/:_id", getAllLang);
router.patch("/updateLang/:_id", updateLang);

module.exports = router;
