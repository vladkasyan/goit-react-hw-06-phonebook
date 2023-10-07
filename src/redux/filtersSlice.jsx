import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { filter: '' },
  reducers: {
    setFilter: {
      reducer: (state, action) => {
        return (state.filter = action.payload);
      },
      prepare: inputValue => {
        return {
          payload: inputValue,
        };
      },
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
