import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from '../features/counter/reducers';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['counter'],
	blackList: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [Thunk];
 
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [...middlewares],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
