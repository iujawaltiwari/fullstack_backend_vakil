const Descinfo = require("../schemas/DescriptionSchema");

module.exports.postEight = (req, res) => {
  const { descript } = req.body;
  const descinfos = new Descinfo({ descript });
  descinfos
    .save()
    .then(() => {
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
};

module.exports.updateDescription = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateuser = await Descinfo.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    // console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
