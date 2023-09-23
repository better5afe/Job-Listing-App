import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';
import Wrapper from '../reusable/Wrapper';
import JobCard from './JobCard';

const JobList = () => {
	const backendJobs = useSelector((state: StateInterface) => state.list);
	const keywords = useSelector((state: StateInterface) => state.keywords);

	const allJobs = backendJobs.map((job) => (
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
				...(job.languages || []),
				...(job.tools || []),
			]}
		/>
	));

	const filteredJobs = allJobs.filter((job) => {
		return keywords.every((filter) =>
			job.props.keywords.some((keyword: string) =>
				keyword.toLowerCase().includes(filter.toLowerCase())
			)
		);
	});

	return <Wrapper>{keywords.length >= 1 ? filteredJobs : allJobs}</Wrapper>;
};

export default JobList;
