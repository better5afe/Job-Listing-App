import FilterList from '../subcomponents/FilterList';
import FilterSection from '../subcomponents/FilterSection';
import JobList from '../subcomponents/JobList';

const Main = () => {
	return (
		<main>
			<FilterList />
			<FilterSection />
			<JobList />
		</main>
	);
};

export default Main;
