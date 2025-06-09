import mongoose, { Schema } from "mongoose";

const HrSchema = new Schema({
  hrName: {
    type: String,
    required: true,
  },
  hrEmail: {
    type: String,
    required: true,
    unique: true,
  },
  hrPassword: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 6,
  },
  companyName: {
    type: String,
    default: "",
  },
  companyLogo: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  Hrban: {
    type: Boolean,
    default: false,
  },
  isProfileComplete: {
    type: Boolean,
    default: false,
  },
});

const Hr = mongoose.model("Employer", HrSchema);
export default Hr;
