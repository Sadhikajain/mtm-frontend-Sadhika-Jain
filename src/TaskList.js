import React, { useState } from 'react';
import './styles.css';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const [editedTask, setEditedTask] = useState('');
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEdit = (index) => {
    updateTask(index, editedTask);
    setEditedTask('');
    setEditedIndex(null);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          {index !== editedIndex ? (
            <>
              <span>{task}</span>
              <button onClick={() => setEditedIndex(index)}>Edit</button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <button onClick={() => handleEdit(index)}>Save</button>
            </>
          )}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
