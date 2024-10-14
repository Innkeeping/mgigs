import { useState } from'react';

const SettingsModal = () => {
  const [skillTags, setSkillTags] = useState([]);
  const [newSkillTag, setNewSkillTag] = useState('');

  const handleAddSkillTag = () => {
    if (newSkillTag) {
      setSkillTags([...skillTags, newSkillTag]);
      setNewSkillTag('');
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target === document.getElementById('settings_modal') || document.getElementById('settings_modal').contains(e.target)) {
      return;
    }

    document.getElementById('settings_modal').close();
  };

  return (
    <dialog id="settings_modal" className="modal" onClick={handleOutsideClick}>
      <div className="modal-box">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Settings</h3>
          <button type="button" className="btn btn-sm btn-circle btn-neutral" onClick={() => document.getElementById('settings_modal').close()}>&times;</button>
        </div>
        <form>
          <label className="label">Language:</label>
          <select className="select">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <label className="label">Skill Tags:</label>
          <div className="flex flex-wrap gap-2">
            <input type="text" className="input w-64" value={newSkillTag} onChange={(e) => setNewSkillTag(e.target.value)} placeholder="Enter a skill tag" />
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