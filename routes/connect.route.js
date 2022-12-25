const express = require("express");
const {
    postCreateConnect,
    getConnectList,
    updateSendConnreq,
    updateConnectionList
} = require("../controllers/connect.controller");

const router = express.Router();

/* reviews */

router.post("/createconnect", postCreateConnect);
router.get("/getconnectlist/:id", getConnectList);
router.patch("/sendconnreq/:userId",updateSendConnreq);
router.patch("/updateconnectionslist/:id",updateConnectionList);

module.exports = router;
