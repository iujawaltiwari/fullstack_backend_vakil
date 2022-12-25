const ServiceCitySearch = require("../schemas/ServiceCitySearchSchema");

module.exports.postServiceCitySearch = (req, res) => {
  const { _id } = req.params;
  const { city_name } = req.body;

  console.log(req.body);
  const servicecitysearchinfo = new ServiceCitySearch({ city_name, userId: _id });
  servicecitysearchinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to add it to search api" })
    );
};

module.exports.getServiceCitySearch = async (req, res) => {
  const { id } = req.params;

  try {
    const servicecitysearch = await ServiceCitySearch.find({ userId: id });
    // console.log(servicecitysearch);
    res.status(201).json(servicecitysearch);
  } catch (err) {
    res.status(404).json(err);
  }
};


module.exports.updateServiceCitySearch = async (req, res) => {
  try {
    const { _id } = req.params;
    const { city_name } = req.body;
    const updatesearch = await ServiceCitySearch.findOneAndUpdate(
      { userId: _id },
      { city_name },
      { new: true }
    );
    console.log(updatesearch);
    res.status(201).json(updatesearch);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
