export const ADD_KEYWORD = 'ADD_KEYWORD';
export const DELETE_KEYWORD = 'DELETE_KEYWORD';
export const DELETE_ALL = 'DELETE_ALL';

export const addKeyword = (keyword: string) => {
	return {
		type: ADD_KEYWORD,
		payload: keyword,
	};
};

export const deleteKeyword = (id: string) => {
	return {
		type: DELETE_KEYWORD,
		payload: id,
	};
};

export const deleteAll = () => {
	return {
		type: DELETE_ALL,
	};
};
