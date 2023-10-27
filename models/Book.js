const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookId: { type: Number},
  title: { type: String, required: true},
  author: { type: String, required: true },
  year: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;
