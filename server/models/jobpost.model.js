import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  companyName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hr",
  },
  jobTitle: {
    type: String,
    require: true,
  },
  experience: {
    type: String,
    default: "0year",
  },
  vacancy: {
    type: String,
  },
  location: {
    type: String,
    require: true,
  },
  mustHaveSkill: {
    type: String,
  },
  jobDescription: {
    type: String,
    require: true,
  },
});

const job = mongoose.model("job", jobSchema);

export default job;
