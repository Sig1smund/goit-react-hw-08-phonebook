import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		input(state, { payload }) {
			state.value = payload;
		},
	},
});

export const { input } = filterSlice.actions;
export const filter = state => state.filter.value;
