import React, { useState, useEffect } from 'react';
import './List.css'

function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Create Task</button>
      <button>Delete Task</button>
      <button>Update Task</button>
    </div>
  );
}

export default List;