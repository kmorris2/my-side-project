import React from "react";
import { Todo } from "./App";
const ToDo = ({
  todo,
  handleToggle,
}: {
  todo: Todo;
  handleToggle: (id: number) => void;
}) => {
  return (
    //TODO add css line-through styling for when a task is clicked
    <div className="task-container">
      <div
        className={todo.complete ? "task" : ""}
        onClick={() => handleToggle(todo.id)}
        key={todo.id + todo.task}
      >
        {String(todo.complete)}
        {todo.task}
      </div>
    </div>
  );
};

export default ToDo;
