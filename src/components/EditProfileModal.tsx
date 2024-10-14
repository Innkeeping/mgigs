import React from'react';

interface EditProfileModalProps {
  // Add expected props
}

const EditProfileModal: React.FC<EditProfileModalProps> = () => {
  const handleOutsideClick: React.MouseEventHandler<HTMLDialogElement> = (e) => {
    const modal = document.getElementById('edit_profile_modal');
    if (e.target === modal || modal?.contains(e.target as Element)) {
      return;
    }

    const modalElement = document.getElementById('edit_profile_modal');
    if (modalElement) {
      (modalElement as HTMLDialogElement).close();
    }
  };

  return (
    <dialog id="edit_profile_modal" className="modal mt-16" onClick={handleOutsideClick}>
      <div className="modal-box">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Edit Profile</h3>
          <button type="button" className="btn btn-sm btn-circle btn-neutral" onClick={() => {
            const modal = document.getElementById('edit_profile_modal');
            if (modal) {
              (modal as HTMLDialogElement).close();
            }
          }}>&times;</button>
        </div>
        <form>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="src/assets/laptop.svg" className="rounded-full" />
                </div>
              </div>
              <button type="button" className="absolute bottom-1 right-1 btn btn-sm btn-circle btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Username:</label>
              <input type="text" className="input w-64 border border-gray-300 rounded-lg p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Bio:</label>
              <textarea className="textarea w-64 h-24 border border-gray-300 rounded-lg p-2" placeholder="Tell us a bit about yourself" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Farcaster:</label>
              <input type="text" className="input w-64 border border-gray-300 rounded-lg p-2" placeholder="@username" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Lens:</label>
              <input type="text" className="input w-64 border border-gray-300 rounded-lg p-2" placeholder="@username" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">X (Twitter):</label>
              <input type="text" className="input w-64 border border-gray-300 rounded-lg p-2" placeholder="@username" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">GitHub:</label>
              <input type="text" className="input w-64 border border-gray-300 rounded-lg p-2" placeholder="@username" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Website:</label>
              <input type="text" className="input w-64 border border-gray-300 rounded-lg p-2" placeholder="https://yourwebsite.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Location:</label>
              <input type="text" className="input w-64 border border-gray-300 rounded-lg p-2" placeholder="City, Country" />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="btn">Save Changes</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default EditProfileModal;