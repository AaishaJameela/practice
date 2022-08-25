import React from "react";
import { v4 as uuid } from "uuid";

const TodoList = ({ item, index, deleteTask }) => {
  return (
    <div>
      <br></br>
      <li key={uuid()}>
        {item.todo} &nbsp;
        <button onClick={() => deleteTask(index)}>Delete</button>
      </li>
    </div>
  );
};
export default TodoList;
