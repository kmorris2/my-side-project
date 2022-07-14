import * as React from "react";
import { Todo } from "./App";
import ToDo from "./ToDo";

const ToDoList = ({
  toDoList,
  handleToggle,
  handleFilter,
}: {
  toDoList: Todo[];
  handleToggle: (id: number) => void;
  handleFilter: () => void;
}) => {
  return (
    <div className="todo-list">
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
      <button className="clear-button" onClick={handleFilter}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default ToDoList;
