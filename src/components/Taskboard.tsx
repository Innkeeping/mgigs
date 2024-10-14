import React, { useState } from'react';
import { Link } from '@tanstack/react-router';
import Sidebar from './Sidebar';

const Taskboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'to-do' },
    { id: 2, title: 'Task 2', status: 'in-progress' },
    { id: 3, title: 'Task 3', status: 'done' },
  ]);

  const [newTask, setNewTask] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const task = JSON.parse(e.dataTransfer.getData('task'));
    setTasks(
      tasks.map((t) => (t.id === task.id? {...t, status } : t))
    );
  };

  const addTask = () => {
    const newTaskId = tasks.length + 1;
    const newTaskObject = { id: newTaskId, title: newTask, status: newTaskStatus };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
    setModalOpen(false);
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4 mt-16 mr-12">
        <h1 className="text-4xl font-bold mb-4">Taskboard</h1>
        <div className="flex flex-row justify-center gap-4">
          <div
            className="bg-base-100 p-4 rounded-lg w-64"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'to-do')}
          >
            <h2 className="text-lg font-bold mb-2">To-Do</h2>
            <button
              className="bg-base-200 p-2 rounded-lg mb-2"
              onClick={() => {
                setNewTaskStatus('to-do');
                setModalOpen(true);
              }}
            >
              Add Task
            </button>
            <ul className="list-none">
              {tasks
               .filter((task) => task.status === 'to-do')
               .map((task) => (
                  <li
                    key={task.id}
                    className="bg-base-200 p-2 rounded-lg mb-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task)}
                  >
                    {task.title}
                  </li>
                ))}
            </ul>
          </div>
          <div
            className="bg-base-100 p-4 rounded-lg w-64"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'in-progress')}
          >
            <h2 className="text-lg font-bold mb-2">In-Progress</h2>
            <button
              className="bg-base-200 p-2 rounded-lg mb-2"
              onClick={() => {
                setNewTaskStatus('in-progress');
                setModalOpen(true);
              }}
            >
              Add Task
            </button>
            <ul className="list-none">
              {tasks
               .filter((task) => task.status === 'in-progress')
               .map((task) => (
                  <li
                    key={task.id}
                    className="bg-base-200 p-2 rounded-lg mb-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task)}
                  >
                    {task.title}
                  </li>
                ))}
            </ul>
          </div>
          <div
            className="bg-base-100 p-4 rounded-lg w-64"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'in-review')}
          >
            <h2 className="text-lg font-bold mb-2">In Review</h2>
            <button
              className="bg-base-200 p-2 rounded-lg mb-2"
              onClick={() => {
                setNewTaskStatus('in-review');
                setModalOpen(true);
              }}
            >
              Add Task
            </button>
            <ul className="list-none">
              {tasks
               .filter((task) => task.status === 'in-review')
               .map((task) => (
                  <li
                    key={task.id}
                    className="bg-base-200 p-2 rounded-lg mb-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task)}
                  >
                    {task.title}
                  </li>
                ))}
            </ul>
          </div>
          <div
            className="bg-base-100 p-4 rounded-lg w-64"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'done')}
          >
            <h2 className="text-lg font-bold mb-2">Done</h2>
            <button
              className="bg-base-200 p-2 rounded-lg mb-2"
              onClick={() => {
                setNewTaskStatus('done');
                setModalOpen(true);
              }}
            >
              Add Task
            </button>
            <ul className="list-none">
              {tasks
              .filter((task) => task.status === 'done')
              .map((task) => (
                  <li
                    key={task.id}
                    className="bg-base-200 p-2 rounded-lg mb-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task)}
                  >
                    {task.title}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-base-100 p-4 rounded-lg w-64">
            <h2 className="text-lg font-bold mb-2">Add Task</h2>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="bg-base-200 p-2 rounded-lg mb-2 w-full"
            />
            <button
              className="bg-base-200 p-2 rounded-lg mb-2"
              onClick={addTask}
            >
              Add
            </button>
            <button
              className="bg-base-200 p-2 rounded-lg mb-2"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Taskboard;