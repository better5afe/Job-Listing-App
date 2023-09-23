import { JobCardProps } from '../../models/interfaces';
import Card from '../reusable/Card';
import Badge from '../reusable/Badge';
import KeywordTile from '../reusable/KeywordTile';

import './JobCard.scss';

const JobCard: React.FC<JobCardProps> = ({
	img,
	id,
	company,
	isNew,
	isFeatured,
	position,
	postedAt,
	contract,
	location,
	keywords,
}) => {
	return (
		<Card
			id={id.toString()}
			className={isFeatured ? 'job job--featured' : 'job'}
		>
			<img src={img} alt="Company's logo" className='job__logo' />
			<div>
				<div className='job__overview'>
					<h2 className='job__overview-company'>{company}</h2>
					<div className='job__overview-badges'>
						{isNew && <Badge text='new!' />}
						{isFeatured && <Badge text='featured' className='featured' />}
					</div>
				</div>
				<div className='job__info'>
					<h3 className='job__info-position'>{position}</h3>
					<div className='job__info-details'>
						<p>{postedAt}</p>
						<span className='job__info-details--bullet'>∙</span>
						<p>{contract}</p>
						<span className='job__info-details--bullet'>∙</span>
						<p>{location}</p>
					</div>
				</div>
			</div>
			<div className='job__keywords'>
				{keywords.map((keyword) => (
					<KeywordTile key={keyword} keyword={keyword} />
				))}
			</div>
		</Card>
	);
};

export default JobCard;
