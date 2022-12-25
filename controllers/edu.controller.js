const Education = require("../schemas/EducationSchema");

module.exports.postTwo = (req, res) => {
  const { education, userId } = req.body;
  const educationinfo = new Education({ education, userId });
  educationinfo
    .save()
    .then(() => {
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed to reistered" }));
};

module.exports.getEdu = async (req, res) => {
  try {
    const userId = req.params.id;
    const edudata = await Education.find({ userId });
    res.status(201).json(edudata);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.updateEdu = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateuser = await Education.findOneAndUpdate(
      { userId: _id },
      { education: req.body.eduData },
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

module.exports.deleteEdu = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteuser = await Education.findOneAndRemove(
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
