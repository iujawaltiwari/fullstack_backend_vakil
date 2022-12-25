const Client = require("../schemas/ClientSchema");

module.exports.postTen = (req, res) => {
  const { client, userId } = req.body;
  const clientinfo = new Client({ client, userId });
  clientinfo
    .save()
    .then(() => {
      // console.log(clientinfo);
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json({ error: "Failed tonreistered" });
    });
};

module.exports.getClient = async (req, res) => {
  try {
    const { _id } = req.params;
    const clients = await Client.find({ userId: _id });
    // console.log(clients);
    res.status(201).json(clients);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.deleteClient = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteuser = await Client.findOneAndRemove(
      { userId: _id },
      {
        new: true,
      }
    );
    // // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateClient = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateuser = await Client.findOneAndUpdate(
      { userId: _id },
      { client: req.body.clientData },
      {
        new: true,
      }
    );
    // console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
