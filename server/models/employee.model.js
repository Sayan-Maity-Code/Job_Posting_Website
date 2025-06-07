import { Schema } from "mongoose";
import userModel from "./user.model.js";

const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
  resume: { type: String }, // This could be a URL to a resume file.
  skills: [{ type: String }],
  experience: [
    {
      company: { type: String },
      title: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
    },
  ],
  education: [
    {
      institution: { type: String },
      degree: { type: String },
      fieldOfStudy: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
    },
  ],
});

export const Employee = userModel.discriminator("Employee", EmployeeSchema);
