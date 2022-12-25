const express = require("express");
const {
    postThree,
    getAllExp,
    getExp,
    delete2Exp,
    updateExp,
    deleteExp
} = require("../controllers/exp.controller");

const router = express.Router();

/* reviews */

router.post("/three", postThree);
router.get("/getallexperiences",getAllExp);
router.get("/getexp/:id", getExp);
router.delete("/deleteexp/:_id",delete2Exp);
router.patch("/updateexp/:_id",updateExp);
router.delete("/deleteexp/:_id", deleteExp);

module.exports = router;
