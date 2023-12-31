import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();
// Middleware for parsing request body
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/books", bookRoute);

// Middleware for handling CORS policy
// Option 1: Allow All Origin with default of cors (*)
// app.use(cors());
// Option 2: Allow Custom Origin

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
