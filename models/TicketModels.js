import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    priority: {
      type: Number,
    },
    progress: {
      type: Number,
    },
    status: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const ticketModel =
  mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default ticketModel;
