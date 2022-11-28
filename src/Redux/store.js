import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactSlice';
import { filterReducer } from './FilterSlice';

const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducers,
});
