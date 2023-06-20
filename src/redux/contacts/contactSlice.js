import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const initialState = {
	elements: [],
	isLoading: false,
	isDeleting: false,
	error: null,
};

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	// reducers: {
	// addContact(state, { payload }) {
	// 	state.elements = [...state.elements, payload];
	// },
	// removeContact(state, { payload }) {
	// 	state.elements = state.elements.filter(item => item.id !== payload);
	// },
	// },
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.elements = [...state.elements, action.payload];
				state.isLoading = false;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(addContact.pending, state => {
				state.isLoading = true;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.elements = [...state.elements, action.payload];
				state.isLoading = false;
			})
			.addCase(addContact.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(removeContact.pending, state => {
				state.isDeleting = true;
			})
			.addCase(removeContact.fulfilled, (state, action) => {
				state.elements = state.elements.filter(item => item.id !== action.payload);
				state.isDeleting = false;
			})
			.addCase(removeContact.rejected, (state, action) => {
				state.isDeleting = false;
				state.error = action.payload;
			});
	},
});

export const contactsReducer = contactsSlice.reducer;
