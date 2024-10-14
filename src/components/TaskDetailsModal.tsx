// TaskDetailsModal.tsx
import React from'react';

interface TaskDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskDetails: any;
}

const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({
  isOpen,
  onClose,
  taskDetails,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-base-100 p-4 rounded-lg w-64">
        <h2>Task Details</h2>
        <p>Title: {taskDetails.title}</p>
        <p>Status: {taskDetails.status}</p>
        <p>Description: {taskDetails.description}</p>
        <p>Organization: {taskDetails.organization}</p>
        <p>Bid Reward: ${taskDetails.bidReward}</p>
        <button
          className="bg-base-200 p-2 rounded-lg mb-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskDetailsModal;