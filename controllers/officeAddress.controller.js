const OfficeAddress = require("../schemas/OfficeAddressSchema");

module.exports.postOfficeAdrs = (req, res) => {
  const { address, city, country, state, userId, zipcode } = req.body;
  const officeaddressinfo = new OfficeAddress({
    address,
    city,
    state,
    country,
    zipcode,
    userId,
  });
  officeaddressinfo
    .save()
    .then(() => {
      res.status(201).json({ message: "Successful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
};

module.exports.getOfficeAdrs = async (req, res) => {
  try {
    const { id } = req.params;
    const officeaddress = await OfficeAddress.findOne({ userId: id });
    // console.log(officeaddress);
    res.status(201).json(officeaddress);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateOfficeAdrs = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedoffadd = await OfficeAddress.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updatedoffadd);
    res.status(201).json(updatedoffadd);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
