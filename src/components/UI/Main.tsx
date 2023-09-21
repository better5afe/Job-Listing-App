import FilterList from '../subcomponents/FilterList';
import FilterSection from '../subcomponents/FilterSection';
import JobList from '../subcomponents/JobList';

import './Main.scss';

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
