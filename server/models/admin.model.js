import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
  name: { type: String, required: [true, "Admin name is required"] },
  // You can add admin-specific metadata, such as permission levels.
  permissions: {
    type: [String],
    default: ["manage_users", "manage_jobs"],
  },
});

export const Admin = mongoose.model("Admin", AdminSchema);
