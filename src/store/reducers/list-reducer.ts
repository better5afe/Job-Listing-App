import { FETCH_DATA } from '../actions/list-actions';
import { ActionInterface, JobObject } from '../../models/interfaces';

const initialState: JobObject[] = [];

export const jobsListReducer = (
	state = initialState,
	action: ActionInterface
) => {
	switch (action.type) {
		case FETCH_DATA:
			return action.payload;
		default:
			return state;
	}
};
