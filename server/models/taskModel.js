import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
