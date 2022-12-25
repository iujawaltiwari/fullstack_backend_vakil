const AreaOfLaw = require("../schemas/AreaOfLawSchema");

module.exports.postAreaOfLaw = (req, res) => {
  const { areaoflaws, userId } = req.body;
  const areaoflaw = new AreaOfLaw({ areaoflaws, userId });

  areaoflaw
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};

module.exports.getAllAreaofLaws = async (req, res) => {
  try {
    const allareaoflaws = await AreaOfLaw.find();
    // console.log(allareaoflaws);
    res.status(201).json(allareaoflaws);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getMyAreaOfLaws = async (req, res) => {
  try {
    const { id } = req.params;
    const myareaoflaws = await AreaOfLaw.findOne({ userId: id });
    // console.log(myareaoflaws);
    res.status(201).json(myareaoflaws);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateWebsite = async (req, res) => {
  try {
    const { id } = req.params;
    const updateaol = await AreaOfLaw.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updateaol);
    res.status(201).json(updateaol);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
