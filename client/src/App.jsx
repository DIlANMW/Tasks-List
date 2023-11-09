import React from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { AllTasks } from "./components/AllTasks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskForm />
        <AllTasks />
      </header>
    </div>
  );
}

export default App;
