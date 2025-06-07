import { Schema } from "mongoose";
import userModel from "./user.model";

const AdminSchema = new Schema({
  name: { type: String, required: [true, "Admin name is required"] },
  // You can add admin-specific metadata, such as permission levels.
  permissions: {
    type: [String],
    default: ["manage_users", "manage_jobs"],
  },
});

export const Admin = userModel.discriminator("Admin", AdminSchema);
