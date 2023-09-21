import Wrapper from '../reusable/Wrapper';
import JobCard from './JobCard';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';

const JobList = () => {
	const backendJobs = useSelector((state: StateInterface) => state.list);

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
					keywords={[
						job.role,
						job.level,
						...job.languages,
						...(job.tools || []),
					]}
				/>
			))}
		</Wrapper>
	);
};

export default JobList;
