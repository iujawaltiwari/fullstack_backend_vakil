const OpeningDate = require("../schemas/OpeningDateSchema");

module.exports.postOpeningDate = (req, res) => {
  const { date, userId } = req.body;
  // console.log(req.body);
  const addopeningdate = new OpeningDate({ date, userId });

  addopeningdate
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};

module.exports.getOpeningDate = async (req, res) => {
  try {
    const { id } = req.params;
    const openingdate = await OpeningDate.findOne({ userId: id });
    // console.log(openingdate);
    res.status(201).json(openingdate);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateOpeningDate = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;
    const updateopeningdate = await OpeningDate.findOneAndUpdate(
      { userId: id },
      { date },
      { new: true }
    );
    console.log(updateopeningdate);
    res.status(201).json(updateopeningdate);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
