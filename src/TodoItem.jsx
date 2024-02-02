
import React from "react";

function TodoItem({ text, completed, onToggle, onDelete }) {
  return (
    <div className="item">
      <li className={`todo-item ${completed ? "done" : ""}`} onClick={onToggle}>
        {text}
      </li>
      <span onClick={onDelete} className="trash">
        ❌
      </span>
    </div>
  );
}

export default TodoItem;
