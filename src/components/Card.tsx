import Image from "next/image";

interface CardProps {
  image?: string;
  title: string;
  content: string;
  children?: any;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, content, onClick }) => {
  return (
    <div onClick={onClick} className=" w-1/6  bg-space-dark text-white-pure shadow-lg rounded-lg overflow-hidden transition-shadow duration-200 ease-in-out hover:shadow-xl">
      {image && (
        <Image
          src={image}
          alt=""
          className="w-full h-64 object-cover"
          width={100}
          height={100}
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
};

export default Card;
