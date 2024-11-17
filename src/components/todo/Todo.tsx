import { useState } from "react";
import "./todo.scss";
import { v4 as uuidv4 } from "uuid";

interface Task {
  uuid: string;
  name: string;
  isCompleted: boolean;
}

const blankTask: Task = {
  uuid: "",
  name: "",
  isCompleted: false,
};

const Todo = (): JSX.Element => {
  const [task, setTask] = useState<Task>(blankTask);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handlePlusClick = () => {
    if (!task.name) return;
    setTasks((prevTasks) => [...prevTasks, { ...task, uuid: uuidv4() }]);
    setTask(blankTask);
  };

  const handleIsCompleted = (task_uuid: string) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.uuid === task_uuid) ? {...task, isCompleted: !task.isCompleted} : task));
  };

  const handleDelete = (task_uuid: string) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.uuid !== task_uuid)
    );
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-contaniner">
        <input
          className="input-button"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          type="text"
          value={task.name}
          placeholder="Enter task"
        />
        <button onClick={handlePlusClick}>+</button>
      </div>
      <div className="tasks-container">
        {tasks.map((task) => (
          <div key={task.uuid} className="task-container">
            <div className="task-text">{task.name}</div>
            <div className="task-manipulate">
              <input
                type="checkbox"
                onChange={() => handleIsCompleted(task.uuid)}
                checked={task.isCompleted}
              />
              <button onClick={() => handleDelete(task.uuid)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
