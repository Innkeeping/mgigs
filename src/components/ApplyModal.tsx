import { useState } from'react';

const ApplyModal = ({ isOpen, onClose }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedToken, setSelectedToken] = useState('');
  const [message, setMessage] = useState('');

  const handleDateChange = (e) => {
    setSelectedDates(e.target.value);
  };

  const handleTokenChange = (e) => {
    setSelectedToken(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
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
          <input type="date" value={selectedDates} onChange={handleDateChange} />
          <label className="label">Token:</label>
          <select value={selectedToken} onChange={handleTokenChange}>
            <option value="">Select Token</option>
            <option value="token1">Token 1</option>
            <option value="token2">Token 2</option>
          </select>
          <label className="label">Message:</label>
          <textarea value={message} onChange={handleMessageChange} />
        </div>
        <button className="btn btn-accent rounded-sm mt-2 left-4 mb-6">Submit</button>
      </div>
    </dialog>
  );
};

export default ApplyModal;