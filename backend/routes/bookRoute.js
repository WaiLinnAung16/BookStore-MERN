import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Add Route to stroe new book
router.post("/", async (resquest, response) => {
  try {
    if (
      !resquest.body.title ||
      !resquest.body.author ||
      !resquest.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: resquest.body.title,
      author: resquest.body.author,
      publishYear: resquest.body.publishYear,
    };
    const book = await Book.create(newBook);
    return response.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for update book
router.put("/:id", async (resquest, response) => {
  try {
    if (
      !resquest.body.title ||
      !resquest.body.author ||
      !resquest.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = resquest.params;
    const result = await Book.findByIdAndUpdate(id, resquest.body);
    if (!result) {
      return response.status(400).send({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book updated successfully!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for get all books from database
router.get("/", async (resquest, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route for get  book from database with id
router.get("/:id", async (resquest, response) => {
  const { id } = resquest.params;
  try {
    const book = await Book.findById(id);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route for delete
router.delete("/:id", async (resquest, response) => {
  const { id } = resquest.params;
  try {
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(400).send({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book deleted successfully!" });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get("/", (resquest, response) => {
  console.log(resquest);
  return response.status(234).send("Hello MERN Bookstore!");
});

export default router;
