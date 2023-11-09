import React from "react";
import { HiTrash } from "react-icons/hi";
import { FiCheckSquare } from "react-icons/fi";
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
      className="listElement border d-flex justify-content-between my-3 px-3 py-1 "
    >
      <p className="fs-5 m-0">
        {task.completed ? <s>{task.data}</s> : task.data}
      </p>
      <div>
        {!task.completed ? (
          <FiCheckSquare
            className="fs-5"
            onClick={() => completeTaskStatus(task._id)}
          />
        ) : (
          <GrPowerReset
            className="fs-5"
            onClick={() => completeTaskStatus(task._id)}
          />
        )}

        <HiTrash className="fs-5" onClick={() => deleteTodo()} />
      </div>
    </div>
  );
};
