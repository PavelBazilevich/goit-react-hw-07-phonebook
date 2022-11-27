import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFiltersState,
  reducers: {
    performFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { performFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
