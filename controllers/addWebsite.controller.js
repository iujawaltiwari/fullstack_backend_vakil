const AddWebsite = require("../schemas/AddWebsiteSchema");

module.exports.postWebsite = (req, res) => {
  const { id } = req.params;
  const { link } = req.body;
  // const { link, userId } = req.body;
  const websitelink = new AddWebsite({ link, userId: id });

  websitelink
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to add it to search api" })
    );
};

module.exports.getWebsite = async (req, res) => {
  try {
    const { id } = req.params;
    const websitelink = await AddWebsite.findOne({ userId: id });
    // console.log(websitelink);
    res.status(201).json(websitelink);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.updateWebsite = async (req, res) => {
  try {
    const { id } = req.params;
    const { link } = req.body;
    const updatedlink = await AddWebsite.findOneAndUpdate(
      { userId: id },
      { link },
      { new: true }
    );
    // console.log(updatedlink);
    res.status(201).json(updatedlink);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
