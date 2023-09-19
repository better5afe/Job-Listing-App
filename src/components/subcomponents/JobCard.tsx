import { JobCardProps } from '../../models/interfaces';
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
		<div
			id={id.toString()}
			className={isFeatured ? 'job-card job-card--featured' : 'job-card'}
		>
			<img src={img} alt="Company's logo" className='job-card__logo' />
			<div>
				<div className='job-card__overview'>
					<h2 className='job-card__overview-company'>{company}</h2>
					<div className='job-card__overview-badges'>
						{isNew && <Badge text='new!' />}
						{isFeatured && <Badge text='featured' className='featured' />}
					</div>
				</div>
				<div className='job-card__info'>
					<h3 className='job-card__info-position'>{position}</h3>
					<div className='job-card__info-details'>
						<p>{postedAt}</p>
						<span className='job-card__info-details--bullet'>∙</span>
						<p>{contract}</p>
						<span className='job-card__info-details--bullet'>∙</span>
						<p>{location}</p>
					</div>
				</div>
			</div>
			<div className='job-card__keywords'>
				{keywords.map((keyword) => (
					<KeywordTile key={keyword} keyword={keyword} />
				))}
			</div>
		</div>
	);
};

export default JobCard;
