const LanguageSearch = require("../schemas/LanguageSearchSchema");

module.exports.postLangSearch = (req, res) => {
  const { _id } = req.params;
  const { language } = req.body;
  // console.log(req.body);
  const langsearchinfo = new LanguageSearch({ name: language, userId: _id });

  langsearchinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to add it to search api" })
    );
};

module.exports.getAllLang = async (req, res) => {
  try {
    const { _id } = req.params;
    
    const languages = await LanguageSearch.findOne({ userId: _id });
    console.log(languages);
    res.status(201).json(languages);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.updateLang = async (req, res) => {
  try {
    const { _id } = req.params;
    const { language } = req.body;
    const updatelang = await LanguageSearch.findOneAndUpdate(
      { userId: _id },
      { name: language },
      { new: true }
    );
    console.log(updatelang);
    res.status(201).json(updatelang);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
