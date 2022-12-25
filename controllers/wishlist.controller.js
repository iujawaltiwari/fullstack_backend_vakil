const Wishlist = require("../schemas/WishlistSchema");

module.exports.postWishList = (req, res) => {
  const { items, userId } = req.body;
  const wishlistInfo = new Wishlist({
    items,
    userId,
  });
  wishlistInfo
    .save()
    .then((dat) => {
      // console.log(dat);
      res.status(201).json({ data: dat });
    })
    .catch((err) =>
      res.status(500).json({ err: "Failed to add items to wishlist" })
    );
};

module.exports.getWishList = async (req, res) => {
  try {
    const id = req.params.id;
    const wishlist = await Wishlist.findOne({ userId: id });
    // console.log(wishlist);
    res.status(201).json(wishlist);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.deleteWish = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteWish = await Wishlist.findOneAndRemove(
      { userId: _id },
      {
        new: true,
      }
    );
    res.status(201).json(deletewish);
  } catch (err) {
    // console.log(err);
    res.status(404).json(err);
  }
};

module.exports.updateWish = async (req, res) => {
  try {
    const { _id } = req.params;
    const { items } = req.body;
    const updatewish = await Wishlist.findOneAndUpdate(
      { userId: _id },
      { items },
      {
        new: true,
      }
    );
    // console.log(updatewish);
    res.status(201).json(updatewish);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};
