import { combineReducers } from 'redux';
import { jobsListReducer } from './list-reducer';

export const rootReducer = combineReducers({
	list: jobsListReducer,
});
