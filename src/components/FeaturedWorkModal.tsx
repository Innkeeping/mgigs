import { useState } from'react';

const FeaturedWorkModal = () => {
  const [featuredWorkTitle, setFeaturedWorkTitle] = useState('');
  const [featuredWorkDescription, setFeaturedWorkDescription] = useState('');
  const [featuredWorkLink, setFeaturedWorkLink] = useState('');
  const [featuredWorkImage, setFeaturedWorkImage] = useState(null);
  const [featuredWorkList, setFeaturedWorkList] = useState([]);

  const handleAddFeaturedWork = () => {
    if (featuredWorkTitle && featuredWorkDescription && featuredWorkLink) {
      const newWork = {
        title: featuredWorkTitle,
        description: featuredWorkDescription,
        link: featuredWorkLink,
        image: featuredWorkImage,
      };

      setFeaturedWorkList([...featuredWorkList, newWork]);
      setFeaturedWorkTitle('');
      setFeaturedWorkDescription('');
      setFeaturedWorkLink('');
      setFeaturedWorkImage(null);
    }
  };

  const handleImageChange = (e) => {
    setFeaturedWorkImage(e.target.files[0]);
  };

  return (
    <dialog id="featured_work_modal" className="modal">
      <div className="modal-box mt-16">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Add Featured Work</h3>
          <button type="button" className="btn btn-sm btn-circle btn-neutral" onClick={() => document.getElementById('featured_work_modal').close()}>&times;</button>
        </div>
        <form>
          <label className="label">Title:</label>
          <input type="text" className="input w-full border border-gray-300 rounded-lg p-2" value={featuredWorkTitle} onChange={(e) => setFeaturedWorkTitle(e.target.value)} />
          <label className="label">Description:</label>
          <textarea className="textarea w-full h-24 border border-gray-300 rounded-lg p-2" value={featuredWorkDescription} onChange={(e) => setFeaturedWorkDescription(e.target.value)} />
          <label className="label">Link:</label>
          <input type="text" className="input w-full border border-gray-300 rounded-lg p-2" value={featuredWorkLink} onChange={(e) => setFeaturedWorkLink(e.target.value)} />
          <label className="label">Image:</label>
          <input type="file" className="input w-full border border-gray-300 rounded-lg p-2" onChange={handleImageChange} />
          <button type="button" className="btn btn-square btn-md btn-neutral w-full p-2 ml-2 mr-2 rounded-md" onClick={handleAddFeaturedWork}>Add</button>
          <h2 className="card-title mt-4">Featured Work List:</h2>
          <ul className="list-none">
            {featuredWorkList.map((work, index) => (
              <li key={index} className="text-sm text-gray-400">
                <h3 className="card-title">{work.title}</h3>
                <p className="text-sm text-gray-400">{work.description}</p>
                <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">{work.link}</a>
                {work.image && (
                  <img src={URL.createObjectURL(work.image)} alt="Featured Work Image" className="w-full h-48 mt-2" />
                )}
              </li>
            ))}
          </ul>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default FeaturedWorkModal;