import { JobObject } from '../../models/interfaces';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = (data: JobObject[]) => {
	return {
		type: FETCH_DATA,
		payload: data,
	};
};
