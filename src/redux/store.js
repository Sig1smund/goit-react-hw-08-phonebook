import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { filterSlice } from './contacts/filterSlice';
import { contactApi } from './contacts/contactApi';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
};

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

// const persistedContactsReducer = persistReducer(
// 	persistConfig,
// 	contactsSlice.reducer
// );

const persistedFilterReducer = persistReducer(
	persistConfig,
	filterSlice.reducer
);

export const store = configureStore({
	reducer: {
		// contacts: persistedContactsReducer,
		filter: persistedFilterReducer,
		[contactApi.reducerPath]: contactApi.reducer,
		auth: persistReducer(authPersistConfig, authReducer),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(contactApi.middleware),
});

export const persistor = persistStore(store);
