const express = require("express");
const {
    postNewMessage,
    postStartConvo,
    getMessage,
    getConvoFriendId,
    getConvoId,
    deleteAllMsgs,
    deleteConvo
    
} = require("../controllers/conversation.controller");

const router = express.Router();

/* reviews */

router.post("/newmessage", postNewMessage);
router.post("/startconvo", postStartConvo);
router.get("/getmessages/:convoid", getMessage);
router.get("/getconvoId/:id/:friendId", getConvoFriendId);
router.get("/getconvo/:id", getConvoId);
router.delete("/deleteallmsgs/:_id", deleteAllMsgs);
router.delete("/deleteconv/:_id", deleteConvo);

module.exports = router;
