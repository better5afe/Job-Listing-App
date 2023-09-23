import { CardProps } from '../../models/interfaces';
import './Card.scss';

const Card: React.FC<CardProps> = ({ children, className, id }) => {
    return <div id={id} className={`card card--${className}`}>{children}</div>;
};

export default Card;
