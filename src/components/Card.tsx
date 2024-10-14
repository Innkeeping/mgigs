interface CardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const Card = ({ title, description, image, onClick }: CardProps) => {
  return (
    <div className="card rounded-md bg-base-100 shadow-xl h-48 md:h-40 lg:h-48 lg:w-3/4 md:-1/2 sm:w-full sm:ml-6 md:ml-0 ml-0 mr-4 border border-white hover:bg-slate-700 flex" onClick={onClick}>
      <div className="flex">
        <img src={image} className="w-16 rounded-full ml-4 mt-4" />
      </div>
      <div className="pl-4">
        <h2 className="card-title">{title}</h2>
        <p className="font-medium text-accent">{description}</p>
      </div>
      <div className="flex justify-end">
        <div className="tooltip" data-tip="This gig is open to bids or has a set reward.">
        <div className="btn btn-xs btn-neutral rounded-md mr-4">Bid/Reward$</div>
        </div>
      </div>
      <div className="flex pl-4">
        <div className="pb-2">
          <div className="badge badge-neutral rounded-md mx-1">categories</div>
          <div className="badge badge-primary rounded-md mx-1">skills</div>
          <div className="badge badge-accent rounded-md mx-1">no. apply</div>
        </div>
      </div>
    </div>
  );
};

export default Card;