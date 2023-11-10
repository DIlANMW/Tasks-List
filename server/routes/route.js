import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  completeTask,
} from "../controller/taskController.js";

// Create a Router
const router = express.Router();

// Base Route
router.get("/", (req, res) => {
  res.send("This is the Base Route");
});

// Routes for Todos API
router.get("/tasks", getAllTasks);
router.post("/tasks", addTask);
router.patch("/tasks/:id", completeTask);
router.delete("/tasks/:id", deleteTask);

export default router;
