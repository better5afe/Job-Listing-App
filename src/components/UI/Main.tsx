import FilterList from '../subcomponents/FilterList';
import FilterSection from '../subcomponents/FilterSection';
import JobList from '../subcomponents/JobList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StateInterface } from '../../models/interfaces';

const Main = () => {
	const keywordsList = useSelector((state: StateInterface) => state.keywords);

	return (
		<main>
			{keywordsList.length !== 0 ? <FilterList /> : ''}
			<FilterSection />
			<JobList />
		</main>
	);
};

export default Main;
