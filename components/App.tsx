import React, { useState } from "react";
import data from "../data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
export interface Todo {
  id: number;
  task: string;
  complete: boolean;
}

function App() {
  const [toDoList, setToDoList] = useState<Todo[]>(data);
  // React.useEffect(() => {
  //   async function init() {
  //     let response = await fetch("./data.json");
  //     let data = await response.json();
  //     setToDoList(data);
  //   }
  //   init();
  // }, []);

  const handleToggle = (id: number) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task }; //... is a spread operator. shorthand for interating over either arrays, pain objects, or arguments of a function
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput: string) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: ToDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div>
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
