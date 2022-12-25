const PlaceSearch = require("../schemas/PlaceSearchSchema");

module.exports.postPlaceSearch = (req, res) => {
  const placesearch = new PlaceSearch(req.body);

  placesearch
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};

module.exports.getPlaceSearch =async (req, res) => {
  try {
    const placesearch = await PlaceSearch.find();
    // console.log(placesearch);
    res.status(201).json(placesearch);
  } catch (err) {
    res.status(500).json(err);
  }
};
