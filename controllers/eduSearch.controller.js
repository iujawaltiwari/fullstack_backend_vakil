const EducationSearch = require("../schemas/EducationSearchSchema");

module.exports.postEduSrc = (req, res) => {
  const { college, country, city, state } = req.body;
  // console.log(req.body);
  const edusearchinfo = new EducationSearch({ college, country, state, city });
  edusearchinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to add it to search api" })
    );
};

module.exports.getEduSrc = async (req, res) => {
  try {
    const edusearch = await EducationSearch.find();
    // console.log(edusearch);
    res.status(201).json(edusearch);
  } catch (err) {
    res.status(404).json(err);
  }
};
