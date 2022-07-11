import * as React from "react";
import ToDo from "./ToDo";

const ToDoList = ({
  toDoList,
  handleToggle,
  handleFilter,
}: {
  toDoList: any;
  handleToggle: any;
  handleFilter: any;
}) => {
  return (
    <div>
      {toDoList.map((todo: any) => {
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
