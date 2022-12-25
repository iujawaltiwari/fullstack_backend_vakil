const MapSchema = require("../schemas/MapSchema");

module.exports.postMaps = (req, res) => {
  const { longitude, latitude } = req.body;
  const mapdata = new MapSchema({ longitude, latitude });
  // console.log(mapdata);
  mapdata
    .save()
    .then(() => {
      res.status(201).json({ message: "Succesful" });
    })
    .catch((err) => res.status(500).json({ error: "Failed tonreistered" }));
};
