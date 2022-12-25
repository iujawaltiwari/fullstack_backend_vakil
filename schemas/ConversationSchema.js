const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
    member:[{type: String}],
}, {timestamps: true});

const Conversation = mongoose.model("CONVERSATION", ConversationSchema);

module.exports=Conversation;