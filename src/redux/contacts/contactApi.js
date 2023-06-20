// import { createApi } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// const axiosBaseQuery =
// 	({ baseUrl } = { baseUrl: '' }) =>
// 	async ({ url, method, data, params }) => {
// 		try {
// 			const result = await axios({ url: baseUrl + url, method, data, params });
// 			return { data: result.data };
// 		} catch (axiosError) {
// 			let err = axiosError;
// 			return {
// 				error: {
// 					status: err.response?.status,
// 					data: err.response?.data || err.message,
// 				},
// 			};
// 		}
// 	};

// export const contactApi = createApi({
// 	reducerPath: 'contactApi',
// 	baseQuery: axiosBaseQuery({
// 		baseUrl: 'https://connections-api.herokuapp.com',
// 	}),
// 	prepareHeaders: (headers, { getState }) => {
// 		const token = getState().auth.token;

// 		if (token) {
// 			headers.common.set({ Authorization: `Bearer ${token}` });
// 		}

// 		return headers;
// 	},
// 	tagTypes: ['Contact'],
// 	endpoints: builder => ({
// 		fetchContacts: builder.query({
// 			query: () => ({
// 				url: '/contacts',
// 				method: 'GET',
// 			}),
// 			providesTags: ['Contact'],
// 			refetchOnMountOrArgChange: true,
// 		}),
// 		deleteContact: builder.mutation({
// 			query: contactId => ({
// 				url: `/contacts/${contactId}`,
// 				method: 'DELETE',
// 			}),
// 			invalidatesTags: ['Contact'],
// 		}),
// 		addContact: builder.mutation({
// 			query: newContact => ({
// 				url: '/contacts',
// 				method: 'POST',
// 				body: newContact,
// 			}),
// 			invalidatesTags: ['Contact'],
// 		}),
// 	}),
// });

// export const {
// 	useFetchContactsQuery,
// 	useDeleteContactMutation,
// 	useAddContactMutation,
// } = contactApi;
