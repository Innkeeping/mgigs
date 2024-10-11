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
    <div className="card card-side bg-base-100 shadow-xl w-fit h-fit sticky top-4 ml-16 border border-white">
      <div className="card-body items-center">
        <h1 className="card-title text-1xl pb-2 pt-4">Welcome to mGigs</h1>
        <h2 className="card-subtitle mb-4">Find your next gig here!</h2>
        <input
          type="text"
          className="input input-bordered input-sm w-full mt-2"
          placeholder="Search by title"
          value={filter}
          onChange={handleFilterChange}
        />
        <div className="flex flex-col justify-center mt-2">
          <div className="flex flex-wrap gap-2 w-full justify-center mb-2">
            <button className="btn btn-sm btn-primary hover:bg-primary-focus">New</button>
            <button className="btn btn-sm btn-secondary hover:bg-secondary-focus">Trending</button>
            <button className="btn btn-sm btn-accent hover:bg-accent-focus">Popular</button>
            <button className="btn btn-sm btn-info hover:bg-info-focus">Hot</button>
          </div>
          <div className="flex flex-wrap gap-2 w-full justify-center mb-0">
            <button className="btn btn-sm btn-success hover:bg-success-focus">DAOs</button>
            <button className="btn btn-sm btn-warning hover:bg-warning-focus">Web3</button>
            <button className="btn btn-sm btn-error hover:bg-error-focus">Design</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;