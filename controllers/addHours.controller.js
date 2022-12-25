const AddHours = require("../schemas/AddHoursSchema");

module.exports.postAddHours = (req, res) => {
  const {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    userId,
  } = req.body;
  // console.log(req.body);
  const addhours = new AddHours({
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    userId,
  });

  addhours
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to add it to search api" })
    );
};

module.exports.getAddHours = async (req, res) => {
  try {
    const { id } = req.params;
    const hours = await AddHours.findOne({ userId: id });
    // console.log(hours);
    res.status(201).json(hours);
  } catch (err) {
    res.status(500).json(err);
  }
};

// module.exports.getAddHours = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const hours = await AddHours.findOne({ userId: id });
//     // console.log(hours);
//     res.status(201).json(hours);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

module.exports.updateHours = async (req, res) => {
  try {
    const { id } = req.params;
    const updatehours = await AddHours.findOneAndUpdate(
      { userId: id },
      req.body,
      { new: true }
    );
    // console.log(updatehours);
    res.status(201).json(updatehours);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
