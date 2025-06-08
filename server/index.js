import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cookieParser());

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.end("Home Page");
});

connectMongoDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server has started on http://localhost:${process.env.PORT}`);
  });
});
