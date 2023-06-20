export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter.value;

export const selectAllContacts = state => state.contacts.elements;

export const selectIsDeleting = state => state.contacts.isDeleting;
