import React, { useState } from'react';
const TaskModal = ({ isOpen, onClose, onAddTask, status }) => {
  const modalRef = React.createRef();

  const handleOutsideClick = (e) => {
    if (e.target === modalRef.current || modalRef.current.contains(e.target)) {
      return;
    }

    modalRef.current.close();
  };

  React.useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} id="task_modal" className="modal mt-16" onClick={handleOutsideClick}>
      <div className="modal-box">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Add Task</h3>
          <button type="button" className="btn btn-sm btn-circle btn-neutral" onClick={() => modalRef.current.close()}>&times;</button>
        </div>
        <form>
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
            <button type="submit" className="btn" onClick={(e) => {
              e.preventDefault();
              const title = document.querySelector('#task_modal input[type="text"]').value;
              const description = document.querySelector('#task_modal textarea').value;
              onAddTask({ title, description });
              modalRef.current.close();
            }}>Add Task</button>
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