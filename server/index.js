import express, { urlencoded } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import HrRouter from "./routes/hr/hr.route.js";
const app = express();

//express middlewire
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

// user middlewire
app.use("/hr", HrRouter);

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
