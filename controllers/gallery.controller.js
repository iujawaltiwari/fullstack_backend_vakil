const Gallery = require("../schemas/GallerySchema");

module.exports.postGallery = (req, res) => {
  const { images, userId } = req.body;
  const galleryinfo = new Gallery({
    images,
    userId,
  });
  galleryinfo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ err: "Failed to upload the post" }));
};

module.exports.getGallery = async (req, res) => {
  try {
    const { _id } = req.params;
    const gallery = await Gallery.find({ userId: _id });
    // console.log(gallery);
    res.status(201).json(gallery);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.updateGallery = async (req, res) => {
  try {
    const { _id } = req.params;
    const { images } = req.body;
    const deleteGallery = await Gallery.findOneAndUpdate(
      { userId: _id },
      { images },
      {
        new: true,
      }
    );
    res.status(201).json(deleteGallery);
  } catch (err) {
    // console.log(err);
    res.status(404).json(err);
  }
};

module.exports.deleteGallery = async (req, res) => {
  try {
    const { _id } = req.params;
    // const { images } = req.body;
    const updategallery = await Gallery.findOneAndRemove(
      { userId: _id },
      // { images },
      {
        new: true,
      }
    );
    // console.log(updategallery);
    res.status(201).json(updategallery);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
