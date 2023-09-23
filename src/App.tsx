import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './store/actions/list-actions';
import Header from './components/UI/Header';
import Main from './components/UI/Main';

const App = () => {
	const [errorMsg, setErrorMsg] = useState({
		message: '',
	});

	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			const fetchJobs = async () => {
				try {
					const response = await fetch(
						'https://job-listing-e987f-default-rtdb.europe-west1.firebasedatabase.app/jobs.json'
					);

					if (!response.ok) {
						setErrorMsg({
							message:
								'An error has occured while downloading the data, please try again later.',
						});
						return;
					}
					const responseData = await response.json();
					dispatch(fetchData(responseData));
				} catch (error) {
					setErrorMsg({
						message:
							'An error has occured while downloading the data, please try again later.',
					});
					return;
				}
			};
			fetchJobs();
		}, 1800);
	}, []);

	return (
		<>
			<Header />
			<Main isError={errorMsg} />
		</>
	);
};

export default App;
