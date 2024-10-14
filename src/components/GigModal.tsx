import { useState } from 'react';
import ApplyModal from './ApplyModal';

interface GigModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const GigModal = ({ isOpen, onClose, children }: GigModalProps) => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsApplyModalOpen(true);
  };
  return (
    <div>
      {isApplyModalOpen && (
        <ApplyModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
      )}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box max-w-7xl sm:max-w-1/2 h-screen/3 mt-24 px-4 overflow-y-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4" onClick={onClose}>
              ✕
            </button>
          </form>
          <div className="overflow-y-auto h-full pb-10">
            {children}
          </div>
          <button className="btn btn-accent rounded-sm mt-2 left-4 mb-6" onClick={handleApplyClick}>
            Apply
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default GigModal;