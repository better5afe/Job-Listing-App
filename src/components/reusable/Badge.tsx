import { BadgeProps } from '../../models/interfaces';

import './Badge.scss';

const Badge: React.FC<BadgeProps> = ({ text, className }) => {
	return <p className={`badge badge--${className}`}>{text}</p>;
};

export default Badge;
