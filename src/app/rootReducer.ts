import { combineReducers } from 'redux';
import counterReducer from '../features/counter/reducers';

const rootReducer = combineReducers({
	counter: counterReducer,
})

export default rootReducer;