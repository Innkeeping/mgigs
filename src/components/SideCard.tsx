
const SideCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl w-3/4 sticky top-4 ml-16 h-1/4 border border-white">
      <div className="card-body items-center">
        <h1 className="card-title text-1xl pb-2 pt-4">Welcome to mGigs</h1>
        <h2 className="card-subtitle">Find your next gig here!</h2>
        <div className="flex justify-start gap-2 mt-32 mb-4">
          <span className="badge badge-primary">New</span>
          <span className="badge badge-secondary">Trending</span>
        </div>
      </div>
    </div>
  );
};

export default SideCard;