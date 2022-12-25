const express = require("express");
const {
    postMessage,
    getMessages
} = require("../controllers/message.controller");

const router = express.Router();

/* reviews */

router.post("/message", postMessage);
router.get("/getmessages", getMessages);


module.exports = router;
