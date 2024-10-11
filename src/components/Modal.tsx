import React from'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box max-w-7xl h-screen/3 mt-20 px-4 overflow-y-auto">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4" onClick={onClose}>
            ✕
          </button>
        </form>
        <div className="overflow-y-auto h-full pb-16">
          {children}
        </div>
        <button className="btn btn-accent rounded-sm mt-2 left-4">Apply</button>
      </div>
    </dialog>
  );
};

export default Modal;