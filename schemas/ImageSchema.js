const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let counter = 1;
let CountedId = {type: Number, default: () => counter++};

const ImageSchema = new Schema({
    id: CountedId,
    fileBuffer: {
        type: Buffer,
        required: true
    }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;

Image.find({ id: { $gt: 0 } }).sort({ id: -1 })
    .then(([first, ...others]) => {
        if (first)
            counter = first.id + 1;
    });