import { combineReducers } from 'redux';
import { jobsListReducer } from './list-reducer';
import { keywordsListReducer } from './keyword-reducer';

export const rootReducer = combineReducers({
	list: jobsListReducer,
	keywords: keywordsListReducer,
});
