// Import mongoose library
import mongoose from "mongoose";
// Create a new Schema instance
const Schema = mongoose.Schema;

// Define the Request sub-schema
const RequestSchema = new Schema(
  {
    serviceId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Service model
      ref: "Service",
      required: true, // Service reference is required
    },
    description: {
      type: String, // Description of the request
      required: true, // Description is required
    },
    phoneNumber: {
      type: String, // Phone number of the requester
      required: true, // Phone number is required
    },
    blockNumber: {
      type: String, // Block number where the requester resides
      required: true, // Block number is required
    },
    roomNumber: {
      type: String, // Room number where the requester resides
      required: true, // Room number is required
    },
  },
  { _id: false }
); // Disable automatic _id generation for sub-documents

// Define the User schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  department: {
    type: String, // Optional department field
  },
  studentNumber: {
    type: String,
    unique: true, // Student number must be unique
    required: true,
  },
  profileImage: {
    type: String, // Optional field for profile image URL
  },
  currentYear: {
    type: Number, // Current year of study
  },
  role: {
    type: String,
    enum: ["Admin", "Member", "User"], // Role can only be one of these values
    required: true, // Role is required
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"], // Status can only be Active or Inactive
    required: true, // Status is required
  },
  teamId: {
    // Reference to Team model.
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  inventoryId: {
    // Reference to Team model.
    type: mongoose.Schema.Types.ObjectId,
    ref: "Inventory",
    required: true,
  },

  requests: [RequestSchema], // Embed requests as an array of RequestSchemas
});

// Export the User model based on the UserSchema
export const User = mongoose.model("User",UserSchema)
//'User' is a collection name
