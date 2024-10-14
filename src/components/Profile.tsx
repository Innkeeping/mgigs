import Sidebar from '../components/Sidebar';
import EditProfileModal from './EditProfileModal';
import SettingsModal from './SettingsModal';
import FeaturedWorkModal from './FeaturedWorkModal';

const Profile = () => {
  const handleOutsideClick = (e) => {
    const editProfileModal = document.getElementById('edit_profile_modal');
    const settingsModal = document.getElementById('settings_modal');
    const featuredWorkModal = document.getElementById('featured_work_modal');

    if (e.target === editProfileModal || editProfileModal.contains(e.target)) {
      return;
    }

    if (e.target === settingsModal || settingsModal.contains(e.target)) {
      return;
    }

    if (e.target === featuredWorkModal || featuredWorkModal.contains(e.target)) {
      return;
    }

    editProfileModal.close();
    settingsModal.close();
    featuredWorkModal.close();
  };

  return (
    <Sidebar>
      <h1 className="text-4xl font-bold mb-4 mt-16">My Profile</h1>
      <div className="max-w-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mr-4 mt-4 lg:mt-16 ml-14 lg:mr-4 ">
        <div className="justify-center">
          <div className="card bg-base-100 shadow-xl w-full lg:w-48 h-fit rounded-md">
            <div className="card-body items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="src/assets/laptop.svg" className="rounded-full" />
                </div>
              </div>
              <h2 className="card-title">User Name</h2>
              <div className="flex flex-col items-center gap-2 mt-2">
                <button className="btn btn-square btn-md btn-neutral w-full lg:w-48 p-2 ml-2 mr-2 rounded-md" onClick={()=>document.getElementById('edit_profile_modal').showModal()}>Edit Profile</button>
                <button className="btn btn-square btn-md btn-neutral w-full lg:w-48 p-2 ml-2 mr-2 rounded-md" onClick={()=>document.getElementById('settings_modal').showModal()}>Settings</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl w-full lg:w-48 h-fit mt-2 rounded-md">
            <div className="card-body justify-left">
              <h2 className="card-title">Earnings</h2>
              <h3 className="text-sm text-gray-400">5 dolla</h3>
              <h2 className="card-title mt-4">Skills</h2>
              <h3 className="text-sm text-gray-400">Web Development, UI/UX Design</h3>
              <h2 className="card-title mt-4">Achievements</h2>
              <h3 className="text-sm text-gray-400">10+ projects completed</h3>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl w-full h-fit rounded-md">
            <div className="card-body">
              <h2 className="card-title">About Me</h2>
              <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
              <h2 className="card-title mt-4">Featured Work</h2>
              <button className="btn btn-square btn-md btn-neutral w-full lg:w-48 p-2 ml-2 mr-2 rounded-md" onClick={()=>document.getElementById('featured_work_modal').showModal()}>Add Featured Work</button>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl w-full h-fit mt-2 rounded-md">
            <div className="card-body">
              <h2 className="card-title">Recent Gigs</h2>
              <p className="text-sm text-gray-400">List of recent gigs</p>
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal />
      <SettingsModal />
      <FeaturedWorkModal />
      <div onClick={handleOutsideClick} className="modal-backdrop" />
    </Sidebar>
  );
};

export default Profile;