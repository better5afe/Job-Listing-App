import {
	ADD_KEYWORD,
	DELETE_KEYWORD,
	DELETE_ALL,
} from '../actions/keyword-actions';
import { ActionInterface } from '../../models/interfaces';

const initialState: string[] = [];

export const keywordsListReducer = (
	state = initialState,
	action: ActionInterface
) => {
	switch (action.type) {
		case ADD_KEYWORD:
			if (state.includes(action.payload)) {
				return state;
			}
			return [...state, action.payload];
		case DELETE_KEYWORD:
			return state.filter((id) => id !== action.payload);
		case DELETE_ALL:
			return [];
		default:
			return state;
	}
};
