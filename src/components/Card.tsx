interface CardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const Card = ({ title, description, image, onClick }: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl h-48 md:h-40 lg:h-48 w-full ml-0 mr-16 border border-white hover:bg-slate-700 flex" onClick={onClick}>
      <div className="flex">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-16 rounded-full ml-4 mt-4" />
      </div>
      <div className="pl-4">
        <h2 className="card-title">{title}</h2>
        <p className="font-medium text-accent">{description}</p>
      </div>
      <div className="flex justify-end">
        <div className="badge badge-neutral rounded-sm mr-4">Bid/Reward$</div>
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