import * as React from "react";
import ToDo from "./ToDo";

const ToDoList = ({
  toDoList,
  handleToggle,
  handleFilter,
}: {
  toDoList: { id: number; task: string; complete: boolean }[];
  handleToggle: (id: number) => void;
  handleFilter: () => void;
}) => {
  return (
    <div>
      {toDoList.map((todo: { id: number; task: string; complete: boolean }) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            // handleFilter={handleFilter}
          />
        );
      })}
      <button onClick={handleFilter}>Clear Completed Tasks</button>
    </div>
  );
};

export default ToDoList;
