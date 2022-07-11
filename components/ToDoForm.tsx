import React, { useState } from "react";

// TODO change addTask to props
const ToDoForm = ({ addTask }: { addTask: (task: string) => void }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e: React.BaseSyntheticEvent) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
