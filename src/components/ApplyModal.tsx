import { useState } from'react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedToken, setSelectedToken] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDates([e.target.value]);
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedToken(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  if (!isOpen) return null;

  return (
    <dialog
      id="apply_modal"
      className="modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001]"
      open={isOpen}
      style={{ width: 'fit-content' }}
    >
      <div className="modal-box p-4">
        <form onSubmit={handleSubmit}>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4" onClick={onClose}>
            ✕
          </button>
        </form>
        <div className="overflow-y-auto h-full pb-10">
          <h2 className="text-2xl font-bold">Apply for Opportunity</h2>
          <label className="label">Availability:</label>
          <input type="date" value={selectedDates.join(', ')} onChange={handleDateChange} />
          <label className="label">Token:</label>
          <input type="text" value={selectedToken} onChange={handleTokenChange} />
          <label className="label">Message:</label>
          <textarea value={message} onChange={handleMessageChange} />
        </div>
        <button className="btn btn-accent rounded-sm mt-2 left-4 mb-6">Submit</button>
      </div>
    </dialog>
  );
};

export default ApplyModal;