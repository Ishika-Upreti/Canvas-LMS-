// src/components/TodoList.jsx
import React, { useState } from "react";
import "./TodoList.css";

const initialTodos = [
  { id: 1, task: "Finish React Assignment", due: "31 July", completed: false },
  { id: 2, task: "Prepare Quiz Questions", due: "1 Aug", completed: false },
  { id: 3, task: "Update Resume", due: "3 Aug", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleComplete = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-heading">To-Do List</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span className="task-text">{todo.task}</span>
            </label>
            <span className="due-date">{todo.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
