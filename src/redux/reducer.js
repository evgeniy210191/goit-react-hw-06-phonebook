import { combineReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { initialStates } from './initialState';

const contactSlise = createSlice({
  name: 'contacts',
  initialState: initialStates.contacts,
  reducers: {
    addNewContact: (state = initialStates.contacts, action) => {
      return [...state, action.payload];
    },
    deleteontact: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStates.filter,
  reducers: {
    filtered: (state, action) => {
      return (state = action.payload);
    },
  },
});

const contactsReducer = contactSlise.reducer;
const filterReducer = filterSlice.reducer;

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const { addNewContact, deleteontact } = contactSlise.actions;
export const { filtered } = filterSlice.actions;
