import { AnyAction } from '@reduxjs/toolkit';
import {ActionTypes} from '../actionTypes';

export interface counterStateType {
	counter: number;
}

const initialState = {
	counter: 0,
};

const counterReducer = (
	state: counterStateType = initialState,
	action: AnyAction
): counterStateType => {
	switch (action.type) {
		case ActionTypes.INCREMENT: {
			return {
				...state,
				counter: 
					state.counter + 1
			};
		}
		case ActionTypes.DECREMENT: {
			return {
				...state,
				counter: state.counter - 1,
			};
		}
		default:
			return state;
	}
};

export default counterReducer;
