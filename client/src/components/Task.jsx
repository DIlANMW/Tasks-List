import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import axios from "axios";

export const Task = ({ task }) => {
  const API_URI = "http://localhost:8000";

  // Complete task status
  const completeTaskStatus = async (id) => {
    try {
      const response = await axios.patch(`${API_URI}/tasks/${id}`);
      console.log(response.data.status);
      if (response.data.status === "success") {
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Delete task
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${API_URI}/tasks/${task._id}`);
      console.log(response.data.status);
      if (response.data.status === "success") {
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div
      key={task._id}
      className="listElement border d-flex rounded-3 shadow-sm justify-content-between my-3 px-3 py-4 "
    >
      <p className="fs-5 m-0">
        {task.completed ? <s>{task.data}</s> : task.data}
      </p>
      <div>
        {!task.completed ? (
          <FaCheck
            className="fs-5 icon"
            onClick={() => completeTaskStatus(task._id)}
          />
        ) : (
          <GrPowerReset
            className="fs-5 icon"
            onClick={() => completeTaskStatus(task._id)}
          />
        )}

        <FaTrash className="fs-5 icon" onClick={() => deleteTodo()} />
      </div>
    </div>
  );
};
