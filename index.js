require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const books = require("./models/Book.js");

mongoose.set("strictQuery", false);
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.get("/books", async (req, res) => {
  try {
    const allBooks = await books.find();

    res.json({book : allBooks});
  } catch (error) {
    res.status(500).json({ message: "Could not fetch books" });
  }
});


// POST a new book
app.post("/books", async (req, res) => {
  try {
    const { title, author, year } = req.body;

    const highestBook = await books.findOne().sort({ bookId: -1 });

    const newBookId = highestBook ? highestBook.bookId + 1 : 1;

    const newBook = new books({
      bookId: newBookId,
      title,
      author,
      year,
    });

    const addedBook = await newBook.save();
    res.status(201).json({ book: newBook, message: "Book Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Could not process request" });
  }
});


// PUT (Update) an existing book by ID
app.put("/books/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const updatedBook = await books.findOne({ bookId: id });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    const { title, author, year } = req.body;
    updatedBook.title = title;
    updatedBook.author = author;
    updatedBook.year = year;

    const savedBook = await updatedBook.save();
    res.json({ book: savedBook, message: "Book Updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could Not process request" });
  }
});

// DELETE a book by ID
app.delete("/books/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deletedBook = await books.findOneAndRemove({ bookId: id });

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book removed", book: deletedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could Not process request" });
  }
}); 

//Connect to the db
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running at http:localhost:${PORT}`);
  });
});
