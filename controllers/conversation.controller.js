const Conversation = require("../schemas/ConversationSchema");

// post new message
module.exports.postNewMessage = (req, res) => {
  const { conversationId, sender, text } = req.body;
  // console.log(req.body);
  const newMessage = new Message({ conversationId, sender, text });
  newMessage
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err: "Failed to send message" }));
};

//  connect with friends and start conversation
module.exports.postStartConvo =(req, res) => {
  const { senderId, receiverId } = req.body;
  // console.log(senderId + ":" + receiverId);
  const memberArr = [senderId, receiverId];
  const newConversation = new Conversation({ member: memberArr });
  newConversation
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to start conversation" })
    );
};

// get all the messages in a conversation
module.exports.getMessage = async (req, res) => {
  try {
    const { convoid } = req.params;
    const allmessages = await Message.find({ conversationId: convoid });
    // console.log(allmessages);
    res.status(201).json(allmessages);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get the conversationId of two users if it exists
module.exports.getConvoFriendId = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    // console.log(id);
    // console.log(friendId);
    const conversation = await Conversation.findOne({
      member: { $in: [id, friendId] },
    });
    // console.log(conversation);
    res.status(201).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get the conversation (members) of a user
module.exports.getConvoId = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const conversation = await Conversation.find({
      member: { $in: [id] },
    });
    // console.log(conversation);
    res.status(201).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteAllMsgs =  async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteAllMsgs = await Message.deleteMany({ conversationId: _id });
    res.status(201).json(deleteAllMsgs);
  } catch (err) {
    // console.log(err);
    res.status(201).json(deleteAllMsgs);
  }
};

module.exports.deleteConvo = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedConv = await Conversation.findByIdAndRemove(_id);
    res.status(201).json(deletedConv);
  } catch (err) {
    // console.log(err);
    res.status(201).json(deletedConv);
  }
};
