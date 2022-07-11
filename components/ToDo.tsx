import React from "react";
const ToDo = ({
  todo,
  handleToggle,
}: {
  todo: { task: string; id: number };
  handleToggle: (id: number) => void;
}) => {
  return (
    <div onClick={() => handleToggle(todo.id)} key={todo.id + todo.task}>
      {todo.task}
    </div>
  );
};

export default ToDo;
