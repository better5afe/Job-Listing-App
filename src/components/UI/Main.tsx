import FilterSection from '../subcomponents/FilterSection';
import JobList from '../subcomponents/JobList';

import './Main.scss';

const Main = () => {
	return (
		<main>
			<FilterSection />
			<JobList />
		</main>
	);
};

export default Main;
