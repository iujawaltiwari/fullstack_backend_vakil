const OfficeAddressSearch = require("../schemas/OfficeAddressSearchSchema");

module.exports.postOfficeAddressSearch = (req, res) => {
  const officeaddsearch = new OfficeAddressSearch(req.body);

  officeaddsearch
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};

module.exports.getOfficeAddressSearch = async (req, res) => {
  try {
    const officeaddsearch = await OfficeAddressSearch.find();
    // console.log(officeaddsearch);
    res.status(201).json(officeaddsearch);
  } catch (err) {
    res.status(500).json(err);
  }
};
