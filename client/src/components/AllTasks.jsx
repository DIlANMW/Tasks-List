import axios from "axios";
import React, { useEffect, useState } from "react";
import { Task } from "./Task";

export const AllTasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const API_URI = "http://localhost:8000";

  // Get all tasks on page load
  useEffect(() => {
    getAllTasks();
  }, []);

  // Calling getAllTasks function in every 0.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getAllTasks();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Get all tasks
  const getAllTasks = async () => {
    try {
      const response = await axios.get(`${API_URI}/tasks`);
      setAllTasks(response.data.data.tasks);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="text-start fs-6">
      {allTasks.length > 0 ? <h3 className="h5 mt-3">Saved Tasks</h3> : ""}

      {allTasks < 1 ? (
        <p className="py-5">No saved tasks</p>
      ) : (
        allTasks.map((task) => <Task key={task._id} task={task} />)
      )}
    </div>
  );
};
