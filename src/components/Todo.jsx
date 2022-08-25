import React, { useState } from "react";

const Todo = ({ createTask }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};
export default Todo;
