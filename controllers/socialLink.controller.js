const SocialLink = require("../schemas/SocialLinkSchema");

module.exports.postEleven = (req, res) => {
  const { instagram, facebook, pinterest, mywebsite, twitter, userId } =
    req.body;
  const sociallinks = new SocialLink({
    instagram,
    facebook,
    pinterest,
    mywebsite,
    twitter,
    userId,
  });
  sociallinks
    .save()
    .then(() => {
      // console.log(sociallinks);
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json({ error: "Failed tonreistered" });
    });
};

module.exports.getSocialLink = async (req, res) => {
  try {
    const { id } = req.params;
    const sociallink = await SocialLink.findOne({ userId: id });
    // console.log(sociallink);
    res.status(201).json(sociallink);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateSocialLink = async (req, res) => {
  try {
    const { id } = req.params;
    const updatesociallinks = await SocialLink.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updatesociallinks);
    res.status(201).json(updatesociallinks);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
