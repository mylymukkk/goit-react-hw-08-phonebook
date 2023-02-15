import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationError } from 'components/Notification/Notification';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      notificationError();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      debugger;
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      notificationError();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      notificationError();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);