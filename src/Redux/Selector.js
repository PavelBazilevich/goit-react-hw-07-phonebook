export const contactsFromRedux = state => state.contacts.items;

export const isLoadingFromRedux = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const filterFromRedux = state => state.filter;
