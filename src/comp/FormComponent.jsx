import  { useState } from "react";
import PropTypes from "prop-types";
import { PlusIcon } from '@heroicons/react/24/solid';

const FormComponent = ({ AddTask }) => {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    AddTask({
      name: task,
      checked: false,id:Date.now()
    }); // Pass the task, not the event
    setTask("");
  }

  return (
    <form className="todo" onSubmit={handleSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={80}
          placeholder="Enter task"
        />
        <label htmlFor="task" className="label">Enter your task</label>
      </div>
      <button className="btn" aria-label="add task" type="submit">
        <PlusIcon className="size-6 text-blue-500" />
      </button>
    </form>
  );
}

FormComponent.propTypes = {
  AddTask: PropTypes.func.isRequired
};

export default FormComponent;
