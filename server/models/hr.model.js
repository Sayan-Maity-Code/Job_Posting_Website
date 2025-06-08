import mongoose, { Schema } from "mongoose";
import userModel from "./user.model";

const HrSchema = new Schema({
  hrName: {
    type: String,
    require: true,
  },
  hrEmail: {
    type: String,
    require: true,
    unique: true,
  },
  hrPassword:{
    type: String,
    require: true,
    max:[6],
    min:[5]
  },
  companyName: {
    type: String,
    required: [true, "Company name is required"],
  },
  companyLogo: {
    type: String,
  }, // URL to your company logo.
  website: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
  // Optionally, you can reference jobs posted by this employer.
  jobsPosted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
  Hrban:{
    type:Boolean,
    default:false,
  }
});

export const Hr = userModel.discriminator("Employer", HrSchema);
