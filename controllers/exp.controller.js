const Experience = require("../schemas/ExperienceSchema");

module.exports.postThree = (req, res) => {
  const { experience, userId } = req.body;
  const experienceinfo = new Experience({ experience, userId });
  experienceinfo
    .save()
    .then(() => {
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
};

module.exports.getAllExp = async (req, res) => {
  try {
    const allexps = await Experience.find();
    // console.log(allexps);
    res.status(201).json(allexps);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getExp = async (req, res) => {
  try {
    const userId = req.params.id;
    const expdata = await Experience.find({ userId });
    res.status(201).json(expdata);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.delete2Exp = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteuser = await Experience.findOneAndRemove({ userId: _id });
    // // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateExp = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateuser = await Experience.findOneAndUpdate(
      { userId: _id },
      { experience: req.body.expData },
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

module.exports.deleteExp = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteuser = await Experience.findOneAndRemove(
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
