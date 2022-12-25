const Review = require("../schemas/ReviewSchema");

// get review given by user on other person(owner)
module.exports.getReview = async (req, res) => {
  try {
    const { ownId, userId } = req.params;
    const reviews = await Review.find({ review_on: ownId, userId });
    // console.log(reviews);
    res.status(201).json(reviews);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.deleteReview = async (req, res) => {
  try {
    const { _id, owner } = req.params;
    const deleteReview = await Review.findOneAndRemove({
      userId: _id,
      review_on: owner,
    });
    res.status(201).json(deleteReview);
  } catch (err) {
    // console.log(err);
    res.status(201).json(deleteReview);
  }
};

// update persons review
module.exports.updateMyReview = async (req, res) => {
  try {
    const { _id, owner_id } = req.params;
    const { rating, review, posted_at } = req.body;
    const updatereview = await Review.findOneAndUpdate(
      { userId: _id, review_on: owner_id },
      { rating, review, posted_at },
      {
        new: true,
      }
    );
    // console.log(updatereview);
    res.status(201).json(updatereview);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

// update owner reply
module.exports.updateReview = async (req, res) => {
  try {
    const { _id, owner_id } = req.params;
    const { reply, reply_time } = req.body;
    const updatereview = await Review.findOneAndUpdate(
      { userId: _id, review_on: owner_id },
      { reply, reply_time },
      {
        new: true,
      }
    );
    // console.log(updatereview);
    res.status(201).json(updatereview);
  } catch (error) {
    // console.log(error);
    res.status(404).json(error);
  }
};

module.exports.getAllReviews = async (req, res, next) => {
  try {
    const { ownId } = req.params;
    const reviews = await Review.find({ review_on: ownId });
    return res.status(200).json(reviews);
  } catch (err) {
    return res.status(404).json(err);
  }
};

module.exports.postReview = async (req, res, next) => {
  const { review, posted_at, reply, reply_time, userId, reviewOn, rating } =
    req.body;
  const reviewinfo = new Review({
    review,
    posted_at,
    reply,
    reply_time,
    userId,
    review_on: reviewOn,
    rating,
  });
  reviewinfo
    .save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((err) => res.status(500).json({ err: "Failed to post the review" }));
};
