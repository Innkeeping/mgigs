import React, { useRef, useEffect } from 'react';

// Define the Task type
interface Task {
  title: string;
  description: string;
}

// Define the props interface for TaskModal
interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Task) => void;
  status: 'to-do' | 'in-progress' | 'in-review' | 'done';
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onAddTask}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (modalRef.current && (target === modalRef.current || modalRef.current.contains(target))) {
      return;
    }
    onClose();
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleInput = document.querySelector('#task_modal input[type="text"]') as HTMLInputElement | null;
    const descriptionInput = document.querySelector('#task_modal textarea') as HTMLTextAreaElement | null;

    if (titleInput && descriptionInput) {
      const title = titleInput.value;
      const description = descriptionInput.value;
      onAddTask({ title, description });
      modalRef.current?.close();
    }
  };

  return (
    <dialog ref={modalRef} id="task_modal" className="modal mt-16" onClick={handleOutsideClick}>
      <div className="modal-box">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Add Task</h3>
          <button type="button" className="btn btn-sm btn-circle btn-neutral" onClick={() => modalRef.current?.close()}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-2">
              <label className="label">Title:</label>
              <input type="text" className="input w-64 border border-gray-300 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Description:</label>
              <textarea className="textarea w-64 h-24 border border-gray-300 rounded-lg p-2" />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="btn">Add Task</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default TaskModal;