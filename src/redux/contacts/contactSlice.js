import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	elements: [],
	isLoading: false,
	error: null,
};

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact(state, { payload }) {
			state.elements = [...state.elements, payload];
		},
		removeContact(state, { payload }) {
			state.elements = state.elements.filter(item => item.id !== payload);
		},
	},
});

export const { addContact, removeContact } = contactsSlice.actions;
