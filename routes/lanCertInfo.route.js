const express = require("express");
const {
    postAl,
    getLangCerti
    ,getLanCerti,
    updateLanguages
} = require("../controllers/lanCertInfo.controller");

const router = express.Router();

/* reviews */

router.post("/al/:id", postAl);
router.get("/getlancerti/:id",getLanCerti);
router.get("/getlangcerti/:id", getLangCerti);
router.patch("/updatelanguages:_id",updateLanguages);
// router.post("/al/:id", postAl);



module.exports = router;
