type Props = {
  image: string;
  flipped: boolean;
  onClick?: () => void;
  className?: string;
};

const Card = ({ image, flipped, className, onClick }: Props) => {
  return (
    <div
      className={`flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gray-200 ${className}`}
      onClick={onClick}
    >
      {flipped ? (
        <img
          className="size-full object-cover"
          src={image}
          alt="Memory Image"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Card;
