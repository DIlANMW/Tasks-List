import React, { useState } from "react";
import axios from "axios";

export const TaskForm = () => {
  const [task, setTask] = useState("");

  const API_URL = "http://localhost:8000";

  // submit handler
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { task };
      const response = await axios.post(`${API_URL}/tasks`, body);
      console.log(response.data.status);
      if (response.data.status === "success") {
        setTask("");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="my-4">All Tasks</h1>
      <form onSubmit={onSubmitForm}>
        <div className="form-group d-flex justify-content-between">
          <input
            type="text"
            className="form-control me-2"
            id="task"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit" className="btn add-btn ">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
