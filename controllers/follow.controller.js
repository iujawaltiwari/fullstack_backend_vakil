const Follow = require("../schemas/FollowSchema");

module.exports.CreateFollowList = (req, res) => {
  const { userId } = req.body;
  const createfollow = new Follow({ userId });

  createfollow
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};

module.exports.getFollowList = async (req, res) => {
  try {
    const { id } = req.params;
    const followlist = await Follow.findOne({ userId: id });
    // console.log(followlist);
    res.status(201).json(followlist);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateFollowList = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedfollowlist = await Follow.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updatedfollowlist);
    res.status(201).json(updatedfollowlist);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
