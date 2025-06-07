import mongoose, { Schema } from "mongoose";
import userModel from "./user.model";

const EmployerSchema = new Schema({
  companyName: { type: String, required: [true, "Company name is required"] },
  companyLogo: { type: String }, // URL to your company logo.
  website: { type: String },
  description: { type: String },
  // Optionally, you can reference jobs posted by this employer.
  jobsPosted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

export const Employer = userModel.discriminator("Employer", EmployerSchema);
