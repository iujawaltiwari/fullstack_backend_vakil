const LanCertInfo = require("../schemas/Languag+CetiSchema");

module.exports.postAl = (req, res) => {
  const { id } = req.params;
  // const { language, certificate, userId } = req.body;
  const { language, certificate, userId } = req.body;
  const lancert = new LanCertInfo({
    language,
    certificate,
    userId: id,
  });
  lancert
    .save()
    .then(() => {
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
};

module.exports.getLanCerti = async (req, res) => {
  try {
    const { id } = req.params;
    const langcert = await LanCertInfo.find({ userId: id });
    console.log(langcert);
    res.status(201).json(langcert);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.getLangCerti = async (req, res) => {
  try {
    const { id } = req.params;
    const langcert = await LanCertInfo.findOne({ userId: id });
    // console.log(langcert);
    res.status(201).json(langcert);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.updateLanguages = async (req, res) => {
  try {
    const { id } = req.params;
    const updatelanguages = await LanCertInfo.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updatelanguages);
    res.status(201).json(updatelanguages);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
