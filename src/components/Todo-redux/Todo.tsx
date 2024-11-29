import { useState } from "react";
import "./todo.scss";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addTodo } from "./todoSlice";
import { Store } from "@reduxjs/toolkit";

interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

const blankTask: Task = {
  id: "",
  text: "",
  isCompleted: false,
};

const Todo = (): JSX.Element => {
  const [input, setInput] = useState('');
  const todos = useSelector((state: Store) => state.todos);
  const dispatch = useDispatch()

  const handlePlusClick = () => {
    if (!input) return;
    dispatch(addTodo(input))
    setInput('');
  };

  const handleIsCompleted = (task_uuid: string) => {
    //setTasks((prevTasks) => prevTasks.map((task) => (task.uuid === task_uuid) ? {...task, isCompleted: !task.isCompleted} : task));
  };

  const handleDelete = (task_uuid: string) => {
    // setTasks((prevTasks) =>
    //   prevTasks.filter((task) => task.uuid !== task_uuid)
    // );
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-contaniner">
        <input
          className="input-button"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Enter task"
        />
        <button onClick={handlePlusClick}>+</button>
      </div>
      <div className="tasks-container">
        {todos.map((todo) => (
          <div key={todo.id} className="task-container">
            <div className="task-text">{todo.text}</div>
            <div className="task-manipulate">
              <input
                type="checkbox"
                onChange={() => handleIsCompleted(todo.id)}
                checked={todo.isCompleted}
              />
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
