interface CardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const Card = ({ title, description, image, onClick }: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl h-full w-full border border-white hover:bg-slate-700" onClick={onClick}>
      <figure>
        <img src={image} alt="gig" className="w-12 h-12 mx-auto pt-4" />
      </figure>
      <div className="card-body flex justify-start pb-4">
        <h2 className="card-title">{title}</h2>
        <p className="font-medium text-accent">{description}</p>
        <div className="pb-2">
          <div className="badge badge-neutral rounded-md mx-1">categories</div>
          <div className="badge badge-primary rounded-md mx-1">skills</div>
          <div className="badge badge-accent rounded-md mx-1">no. apply</div>
        </div>
        <div className="justify-right ml-auto my-8">
          <div className="badge badge-neutral rounded-sm">Bid/Reward$</div>
        </div>
      </div>
    </div>
  );
};

export default Card;