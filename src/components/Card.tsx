
interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl h-full w-full">
      <figure>
        <img src={image} alt="gig" className="w-12 h-12 mx-auto pt-4" />
      </figure>
      <div className="card-body flex justify-start pb-4">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn rounded-md py-0 px-2 btn-primary">Details.</button>
        </div>
      </div>
    </div>
  );
};

export default Card;