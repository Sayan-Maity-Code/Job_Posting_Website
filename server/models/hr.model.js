import mongoose, { Schema } from "mongoose";

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
  hrPassword: {
    type: String,
    require: true,
    max: [6],
    min: [5],
  },
  companyName: {
    type: String,
    required: function () {
      return this.isProfileComplete;
    },
  },
  companyLogo: {
    type: String,
  }, // URL to your company logo.
  website: {
    type: String,
    required: function () {
      return this.isProfileComplete;
    },
  },

  description: {
    type: String,
    required: function () {
      return this.isProfileComplete;
    },
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
