import React from "react";
const ToDo = ({ todo, handleToggle }: { todo: any; handleToggle: any }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    handleToggle(e.currentTaget.id);
  };

  return (
    <div id={todo.id} key={todo.id + todo.task}>
      {todo.task}
    </div>
  );
};

export default ToDo;
