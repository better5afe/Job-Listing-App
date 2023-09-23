import FilterList from '../subcomponents/FilterList';
import FilterSection from '../subcomponents/FilterSection';
import JobList from '../subcomponents/JobList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { MainProps, StateInterface } from '../../models/interfaces';

import './Main.scss'

const Main: React.FC<MainProps> = ({ isError }) => {
	const keywordsList = useSelector((state: StateInterface) => state.keywords);

	return (
		<main className='main'>
			{keywordsList.length !== 0 ? <FilterList /> : ''}
			<FilterSection />
			{isError.message !== '' ? <p className='main__error'>{isError.message}</p> : <JobList />}
		</main>
	);
};

export default Main;
