import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';
import Wrapper from '../reusable/Wrapper';
import LoadingCards from './LoadingCards';
import JobCard from './JobCard';

import './JobList.scss';

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

	return (
		<Wrapper>
			{backendJobs.length === 0 && <LoadingCards />}
			{keywords.length >= 1 ? filteredJobs : allJobs}
			{keywords.length >= 1 && filteredJobs.length === 0 && (
				<p className='list__error'>No results</p>
			)}
		</Wrapper>
	);
};

export default JobList;
