import { configureStore } from '@reduxjs/toolkit';
import { ContactReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactReducer = persistReducer(persistConfig, ContactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: filtersReducer,
  },
});

export const persistor = persistStore(store);
