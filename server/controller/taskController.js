import Task from "../models/taskModel.js";

// Add a Task
export const addTask = async (req, res) => {
  try {
    const newTask = await Task.create({
      data: req.body.task,
      completed: false,
      createdAt: Date.now(),
    });
    await newTask.save();
    return res.status(201).json({
      status: "success",
      data: {
        newTask,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get all Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Complete a Task
export const completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.completed = !task.completed;
    await task.save();
    return res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Delete a Task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    await task.remove();
    return res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
