import React, { useState } from 'react';
import './styles.css';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError('Task cannot be empty');
      return;
    }
    addTask(task);
    setTask('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default TaskInput;
