const Personalinfo = require("../schemas/PersonalinfoSchema");

module.exports.postOne = (req, res) => {
  const {
    profile_img,
    firstname,
    lastname,
    city,
    state,
    country,
    ZipCode,
    phone,
    email,
    userId,
  } = req.body;
  if (
    !firstname ||
    !lastname ||
    !city ||
    !state ||
    !country ||
    !ZipCode ||
    !phone ||
    !email
  ) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }
  Personalinfo.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      }
      const personalinfo1 = new Personalinfo({
        profile_img,
        firstname,
        lastname,
        city,
        state,
        country,
        ZipCode,
        phone,
        email,
        userId,
      });
      personalinfo1
        .save()
        .then(() => {
          res.status(201).json({ message: "Succesful" });
        })
        .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
    })
    .catch((err) => {
      // console.log(err);
    });
};

module.exports.getAllPer = async (req, res) => {
  try {
    const perdata = await Personalinfo.find();
    // console.log(perdata);
    res.status(201).json(perdata);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.getMyProfile = async (req, res) => {
  // console.log(req.params.id);
  try {
    const { id } = req.params;
    const perdata = await Personalinfo.findOne({ userId: id });
    // console.log(perdata);
    res.status(201).json(perdata);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.getPer = async (req, res) => {
  // console.log(req.params.id);
  try {
    const { id } = req.params;
    const perdata = await Personalinfo.find({ userId: id });
    // console.log(perdata);
    res.status(201).json(perdata);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.updatePerInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedper = await Personalinfo.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updatedper);
    res.status(201).json(updatedper);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updatePerPhone = async (req, res) => {
  try {
    const { id } = req.params;
    const { phone } = req.body;
    const updatedper = await Personalinfo.findOneAndUpdate(
      { userId: id },
      { phone },
      { new: true }
    );
    // console.log(updatedper);
    res.status(201).json(updatedper);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updatePerName = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    const updatedper = await Personalinfo.findOneAndUpdate(
      { userId: id },
      { firstname, lastname },
      { new: true }
    );
    // console.log(updatedper);
    res.status(201).json(updatedper);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateCover = async (req, res) => {
  try {
    const { _id } = req.params;
    const { cover_img } = req.body;
    const updateCover = await Personalinfo.findOneAndUpdate(
      { userId: _id },
      { cover_img },
      {
        new: true,
      }
    );
    // console.log(updateCover);
    res.status(201).json(updateCover);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateProfile = async (req, res) => {
  try {
    const { _id } = req.params;
    const { profile_img } = req.body;
    const updateProfile = await Personalinfo.findOneAndUpdate(
      { userId: _id },
      { profile_img },
      {
        new: true,
      }
    );
    // console.log(updateProfile);
    res.status(201).json(updateProfile);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateInfoAdrs = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateuser = await Personalinfo.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    // console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateInfoPhone = async (req, res) => {
  try {
    const { _id } = req.params;
    const updateuser = await Personalinfo.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    // console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
