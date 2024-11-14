import { useState } from 'react';

const SettingsModal = () => {
  // Define the type for skillTags
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [newSkillTag, setNewSkillTag] = useState<string>('');

  const handleAddSkillTag = () => {
    if (newSkillTag) {
      setSkillTags([...skillTags, newSkillTag]);
      setNewSkillTag('');
    }
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    const settingsModal = document.getElementById('settings_modal') as HTMLDialogElement | null;
    const target = e.target as HTMLElement;

    if (settingsModal && target) {
      if (target === settingsModal || settingsModal.contains(target)) {
        return;
      }
      settingsModal.close();
    }
  };

  return (
    <dialog id="settings_modal" className="modal" onClick={handleOutsideClick}>
      <div className="modal-box">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Settings</h3>
          <button type="button" className="btn btn-sm btn-circle btn-neutral" onClick={() => {
            const settingsModal = document.getElementById('settings_modal') as HTMLDialogElement | null;
            settingsModal?.close();
          }}>&times;</button>
        </div>
        <form>
          <label className="label">Language:</label>
          <select className="select">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <label className="label">Skill Tags:</label>
          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              className="input w-64"
              value={newSkillTag}
              onChange={(e) => setNewSkillTag(e.target.value)}
              placeholder="Enter a skill tag"
            />
            <button type="button" className="btn" onClick={handleAddSkillTag}>Add</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {skillTags.map((tag, index) => (
              <span key={index} className="badge badge-accent">{tag}</span>
            ))}
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

export default SettingsModal;