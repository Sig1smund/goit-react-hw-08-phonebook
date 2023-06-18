import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	isLoading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				state.isLoading = false;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(logIn.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				state.isLoading = false;
			})
			.addCase(logIn.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(logOut.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(logOut.fulfilled, state => {
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
				state.isLoading = false;
			})
			.addCase(logOut.rejected, (state, action) => {
				state.isRefreshing = false;
				state.error = action.payload;
			})
			.addCase(refreshUser.pending, state => {
				state.isLoading = true;
				state.isRefreshing = true;
				state.error = null;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isLoading = false;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.rejected, (state, action) => {
				state.isRefreshing = false;
				state.error = action.payload;
			});
	},
});

export const authReducer = authSlice.reducer;
