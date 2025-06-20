import { Schema } from "mongoose";

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    max: [6],
    min: [5],
  },
  resume: { type: String },
  // This could be a URL to a resume file.
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
  Employeeban: {
    type: Boolean,
    default: false,
  },
});

export const Employee = mongoose.model("Employee", EmployeeSchema);
