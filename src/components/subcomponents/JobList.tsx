import Wrapper from '../reusable/Wrapper';
import JobCard from './JobCard';
import { getJobs } from '../../utils/data';

import './JobList.scss';

const JobList = () => {
	const backendJobs = getJobs();

	return (
		<Wrapper>
			{backendJobs.map((job) => (
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
