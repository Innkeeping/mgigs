
const SideCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl w-3/4 sticky top-4 ml-8 h-1/4">
      <div className="card-body">
        <h1 className="card-title text-1xl pb-2">Welcome to mGigs</h1>
        <h2 className="card-subtitle">Find your next gig here!</h2>
        <div className="flex justify-start gap-2 mt-48 mb-2">
          <span className="badge badge-primary">New</span>
          <span className="badge badge-secondary">Trending</span>
        </div>
      </div>
    </div>
  );
};

export default SideCard;