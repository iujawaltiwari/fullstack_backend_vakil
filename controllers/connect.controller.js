const Connect = require("../schemas/ConnectSchema");

module.exports.postCreateConnect = (req, res) => {
  const { userId } = req.body;
  const createconnect = new Connect({ userId });

  createconnect
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};

module.exports.getConnectList = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const connectlist = await Connect.findOne({ userId: id });
    // console.log(connectlist);
    res.status(201).json(connectlist);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateSendConnreq = async (req, res) => {
  try {
    const { userId } = req.params;
    const sendconnreq = await Connect.findOneAndUpdate({ userId }, req.body, {
      new: true,
    });
    // console.log(sendconnreq);
    res.status(201).json(sendconnreq);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateConnectionList = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedconnections = await Connect.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updatedconnections);
    res.status(201).json(updatedconnections);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
