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
    <div className="task-container">
      <div
        className={todo.complete ? "task" : ""}
        onClick={() => handleToggle(todo.id)}
        key={todo.id + todo.task}
      >
        {todo.task}
      </div>
    </div>
  );
};

export default ToDo;
