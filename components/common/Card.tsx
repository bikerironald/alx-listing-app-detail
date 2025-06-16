import { CardProps } from '../../interfaces'

const Card = ({ title, description }: CardProps) => (
  <div className="p-4 border rounded shadow-sm">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
