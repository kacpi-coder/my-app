import "./App.css";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newToDo = { text: newTask, color: "white" };
    setToDoList([...toDoList, newToDo]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const newToDoList = toDoList.filter((_, i) => i !== index);
    setToDoList(newToDoList);
  };

  const changeColor = (index) => {
    const updatedList = [...toDoList];
    updatedList[index].color =
      updatedList[index].color === "white" ? "green" : "white";
    setToDoList(updatedList);
  };

  return (
    <>
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Tasks</button>
        <button>jakis dodatkowy button testowy</button>
      </div>

      <div className="list">
        {toDoList.map((task, index) => {
          return (
            <div key={index}>
              <h1 style={{ color: task.color }}>{task.text}</h1>
              <button onClick={() => changeColor(index)}>Completed</button>
              <button onClick={() => deleteTask(index)}>X</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
