const CourtSearch = require("../schemas/CourtSearchSchema");

module.exports.postCourtSearch = (req, res) => {
  const { name } = req.body;
  // console.log(req.body);
  const courtsearchinfo = new CourtSearch({ name });
  courtsearchinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to add it to search api" })
    );
};

module.exports.getCourtSearch = async (req, res) => {
  try {
    const courtsearch = await CourtSearch.find();
    // console.log(courtsearch);
    res.status(201).json(courtsearch);
  } catch (err) {
    res.status(404).json(err);
  }
};
