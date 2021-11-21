import { ActionTypes } from '../actionTypes';
import { DecrementAction, IncrementAction } from '../type';

export const increment = (): IncrementAction => {
	return {
		type: ActionTypes.INCREMENT,
	};
};

export const decrement = (): DecrementAction => {
	return {
		type: ActionTypes.DECREMENT,
	};
};
