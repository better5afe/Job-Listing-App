import Wrapper from '../reusable/Wrapper';
import JobCard from './JobCard';

import './JobList.scss';

const dummyJobs = [
	{
		id: 1,
		company: 'Photosnap',
		logo: require('../../assets/images/photosnap.png'),
		new: true,
		featured: true,
		position: 'Senior Frontend Developer',
		role: 'Frontend',
		level: 'Senior',
		postedAt: '1d ago',
		contract: 'Full Time',
		location: 'USA Only',
		languages: ['HTML', 'CSS', 'JavaScript'],
		tools: [],
	},
	{
		id: 2,
		company: 'Manage',
		logo: require('../../assets/images/manage.png'),
		new: false,
		featured: false,
		position: 'Fullstack Developer',
		role: 'Fullstack',
		level: 'Midweight',
		postedAt: '1d ago',
		contract: 'Part Time',
		location: 'Remote',
		languages: ['Python'],
		tools: ['React'],
	},
];

const JobList = () => {
	return (
		<Wrapper>
			{dummyJobs.map((job) => (
				<JobCard
					key={job.id}
					id={job.id}
					img={job.logo}
					company={job.company}
					isNew={job.new}
                    isFeatured={job.featured}
                    position={job.position}
                    postedAt={job.postedAt}
                    contract={job.contract}
                    location={job.location}
                    keywords={[job.role, job.level, ...job.languages, ...job.tools]}
				/>
			))}
		</Wrapper>
	);
};

export default JobList;
