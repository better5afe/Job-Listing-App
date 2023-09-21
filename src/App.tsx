import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './store/actions/list-actions';
import Header from './components/UI/Header';
import Main from './components/UI/Main';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch(
					'https://job-listing-e987f-default-rtdb.europe-west1.firebasedatabase.app/jobs.json'
				);

				if (!response.ok) {
					throw new Error(
						'An error has occured while downloading the data, please try again later.'
					);
				}
				const responseData = await response.json();
				dispatch(fetchData(responseData));
				
			} catch (error) {
				throw new Error(
					'An error has occured while downloading the data, please try again later.'
				);
			}
		};
		fetchJobs();
	}, []);

	return (
		<>
			<Header />
			<Main />
		</>
	);
};

export default App;
