const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-2 gap-0">
      <div className="col-span-1 justify-center">
        <div className="card bg-base-100 shadow-xl w-48 px-8 h-fit">
          <div className="card-body items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="src/assets/laptop.svg" className="rounded-full" />
              </div>
            </div>
            <h2 className="card-title">User Name</h2>
            <div className="flex flex-col items-center gap-2 mt-2">
              <button className="btn btn-square btn-md btn-neutral w-48 p-2">Edit Profile</button>
              <button className="btn btn-square btn-md btn-neutral w-48 p-2">Settings</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-48 h-fit mt-2">
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
      <div className="col-span-1">
        <div className="card bg-base-100 shadow-xl w-full h-96">
          <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-full h-96 mt-2">
          <div className="card-body">
            <h2 className="card-title">Recent Gigs</h2>
            <p className="text-sm text-gray-400">List of recent gigs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;