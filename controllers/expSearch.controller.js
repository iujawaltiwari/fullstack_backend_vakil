const ExperienceSearch = require("../schemas/ExperienceSearchSchema");

module.exports.postExpSearch = (req, res) => {
  const { company, country, city, state } = req.body;
  // console.log(req.body);
  const expsearchinfo = new ExperienceSearch({ company, country, state, city });
  expsearchinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to add it to search api" })
    );
};

module.exports.getExpSearch = async (req, res) => {
  try {
    const expsearch = await ExperienceSearch.find();
    // console.log(expsearch);
    res.status(201).json(expsearch);
  } catch (err) {
    res.status(404).json(err);
  }
};
