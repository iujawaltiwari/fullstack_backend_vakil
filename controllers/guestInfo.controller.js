const GuestInfo = require("../schemas/GuestSchema");

module.exports.postFive = (req, res) => {
  const {
    enrollmentno,
    membershipno,
    servicecity,
    visitingcourt,
    wardno,
    userId,
  } = req.body;
  const guestinfos = new GuestInfo({
    enrollmentno,
    membershipno,
    servicecity,
    visitingcourt,
    wardno,
    userId,
  });
  guestinfos
    .save()
    .then(() => {
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
};

module.exports.getRegInfo = async (req, res) => {
  try {
    const { _id } = req.params;
    const guestdata = await GuestInfo.findOne({ userId: _id });
    res.status(201).json(guestdata);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.updateWardNo = async (req, res) => {
  try {
    const { id } = req.params;
    const { wardno } = req.body;
    const updatedwardno = await GuestInfo.findOneAndUpdate(
      { userId: id },
      { wardno },
      { new: true }
    );
    // console.log(updatedwardno);
    res.status(201).json(updatedwardno);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
module.exports.updateServiceCity = async (req, res) => {
  try {
    const { id } = req.params;
    const { service_city } = req.body;
    const updatedservicecity = await GuestInfo.findOneAndUpdate(
      { userId: id },
      { servicecity: service_city },
      { new: true }
    );
    // console.log(updatedservicecity);
    res.status(201).json(updatedservicecity);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};



module.exports.updateDetails =async (req, res) => {
  try {
    const { _id } = req.params;
    const updateuser = await GuestInfo.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    // console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.updateInfo =async (req, res) => {
  try {
    const { _id } = req.params;
    const { enrollmentno, membershipno, visitingcourt, servicecity, wardno } =
      req.body;
    const updateuser = await GuestInfo.findOneAndUpdate(
      { userId: _id },
      { enrollmentno, membershipno, visitingcourt, servicecity, wardno },
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
