import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TaskModal from '../components/TaskModal';

// Define the Task type
interface Task {
  id: number;
  title: string;
  status: 'to-do' | 'in-progress' | 'in-review' | 'done';
}

const Taskboard = () => {
  // Define the initial state with the Task type
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Task 1', status: 'to-do' },
    { id: 2, title: 'Task 2', status: 'in-progress' },
    { id: 3, title: 'Task 3', status: 'done' },
  ]);

  // Initialize newTaskStatus with a valid status value
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskStatus, setNewTaskStatus] = useState<Task['status']>('to-do');

  const handleDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, status: Task['status']) => {
    const task = JSON.parse(e.dataTransfer.getData('task')) as Task;
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, status } : t))
    );
  };

  const addTask = (task: Omit<Task, 'id' | 'status'>) => {
    const newTaskId = tasks.length + 1;
    const newTaskObject: Task = { id: newTaskId, ...task, status: newTaskStatus };
    setTasks([...tasks, newTaskObject]);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar>
        {/* Provide children if needed, or an empty fragment if not */}
        <div></div>
      </Sidebar>
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
        <TaskModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onAddTask={addTask}
          status={newTaskStatus}
        />
      )}
    </div>
  );
};

export default Taskboard;