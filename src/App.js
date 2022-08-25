import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [task, settask] = useState([]);
  const createTask = (todo) => {
    const newtask = [...task, { todo }];
    settask(newtask);
  };
  const deleteTask = (index) => {
    const newtask = [...task];
    newtask.splice(index, 1);
    settask(newtask);
  };
  return (
    <div>
      <center>
        <h1>To Do</h1>
        <Todo createTask={createTask} />
        {task.map((item, index) => (
          <TodoList
            key={index}
            index={index}
            item={item}
            deleteTask={deleteTask}
          />
        ))}
      </center>
    </div>
  );
}
export default App;
