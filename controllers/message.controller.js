const Message = require("../schemas/MessageSchema");

module.exports.postMessage = (req, res) => {
  const { message } = req.body;
  const messages = new MessageSchema({ message });
  messages
    .save()
    .then(() => {
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
};

module.exports.getMessages = async (req, res) => {
  try {
    const msg = await MessageSchema.find();
    res.status(201).json(msg);
  } catch (error) {
    res.status(404).json(error);
  }
};
