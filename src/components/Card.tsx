
interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl h-1/3 w-3/4">
      <figure>
        <img src={image} alt="gig" className="w-1/2 h-1/2" />
      </figure>
      <div className="card-body pb-4">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details.</button>
        </div>
      </div>
    </div>
  );
};

export default Card;