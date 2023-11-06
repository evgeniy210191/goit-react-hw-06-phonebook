import { createSlice } from '@reduxjs/toolkit';
import { initialStates } from './initialState';

export const contactSlise = createSlice({
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

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStates.filter,
  reducers: {
    filtered: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addNewContact, deleteontact } = contactSlise.actions;
export const { filtered } = filterSlice.actions;
