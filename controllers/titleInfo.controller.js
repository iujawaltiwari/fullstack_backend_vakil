const Titleinfo = require("../schemas/TitleSchema");

module.exports.postSeven = (req, res) => {
  const { title, descript, userId } = req.body;
  const titleinfos = new Titleinfo({ title, descript, userId });
  titleinfos
    .save()
    .then(() => {
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
};

module.exports.getTitle = async (req, res) => {
  try {
    const userId = req.params._id;
    const titledata = await Titleinfo.findOne({ userId });
    res.status(201).json(titledata);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.updateTitle = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title } = req.body;
    const updatetitle = await Titleinfo.findOneAndUpdate(
      { userId: _id },
      { title },
      { new: true }
    );
    console.log(updatetitle);
    res.status(201).json(updatetitle);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateDescript = async (req, res) => {
  try {
    const { id } = req.params;
    const { descript } = req.body;
    const updatedescript = await Titleinfo.findOneAndUpdate(
      { userId: id },
      { descript },
      { new: true }
    );
    // console.log(updatedescript);
    res.status(201).json(updatedescript);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateInfo = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateuser = await Titleinfo.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    // console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
