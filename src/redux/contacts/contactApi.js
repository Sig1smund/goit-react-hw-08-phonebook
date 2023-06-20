import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
	reducerPath: 'contactApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://connections-api.herokuapp.com',

		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;

			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ['Contact'],
	endpoints: builder => ({
		fetchContacts: builder.query({
			query: () => ({
				url: '/contacts',
				method: 'GET',
			}),
			providesTags: ['Contact'],
			refetchOnMountOrArgChange: true,
		}),
		deleteContact: builder.mutation({
			query: contactId => ({
				url: `/contacts/${contactId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Contact'],
		}),
		addContact: builder.mutation({
			query: newContact => ({
				url: '/contacts',
				method: 'POST',
				body: { ...newContact },
			}),
			invalidatesTags: ['Contact'],
		}),
	}),
});

export const {
	useFetchContactsQuery,
	useDeleteContactMutation,
	useAddContactMutation,
} = contactApi;
