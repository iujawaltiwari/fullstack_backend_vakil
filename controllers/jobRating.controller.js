const JobRating = require("../schemas/JobRatingSchema");

module.exports.postJobRating = (req, res) => {
  const { rated_by, userId } = req.body;
  const jobrating = new JobRating({ rated_by, userId });

  jobrating
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};

module.exports.updateJobRating = async (req, res) => {
  try {
    const { id } = req.params;
    const updatejobrating = await JobRating.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updatejobrating);
    res.status(201).json(updatejobrating);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
