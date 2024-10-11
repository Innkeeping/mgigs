import { useState } from'react';

interface SideCardProps {
  setFilter: (filter: string) => void;
}

const SideCard = ({ setFilter }: SideCardProps) => {
  const [filter, setFilterState] = useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterState(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl w-3/4 sticky top-4 ml-16 h-screen/3 border border-white">
      <div className="card-body items-center h-full">
        <h1 className="card-title text-1xl pb-2 pt-4">Welcome to mGigs</h1>
        <h2 className="card-subtitle">Find your next gig here!</h2>
        <input
          type="text"
          className="input input-bordered input-sm w-full mt-4"
          placeholder="Search by title"
          value={filter}
          onChange={handleFilterChange}
        />
        <div className="flex flex-wrap gap-2 mt-4 flex-1 overflow-y-auto">
          <button className="btn btn-sm btn-primary hover:bg-primary-focus">New</button>
          <button className="btn btn-sm btn-secondary hover:bg-secondary-focus">Trending</button>
          <button className="btn btn-sm btn-accent hover:bg-accent-focus">Popular</button>
          <button className="btn btn-sm btn-info hover:bg-info-focus">Hot</button>
          <button className="btn btn-sm btn-success hover:bg-success-focus">DAOs</button>
          <button className="btn btn-sm btn-warning hover:bg-warning-focus">Web3</button>
          <button className="btn btn-sm btn-error hover:bg-error-focus">Design</button>
        </div>
      </div>
    </div>
  );
};

export default SideCard;