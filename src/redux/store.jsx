import { configureStore } from '@reduxjs/toolkit';
import { ContactReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactReducer,
    filters: filtersReducer,
  },
});
