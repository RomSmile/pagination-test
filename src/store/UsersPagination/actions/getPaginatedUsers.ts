import { createAsyncThunk } from '@reduxjs/toolkit';
import UsersService from '@/services/UsersService';
import { toast } from 'react-toastify';

export const getPaginatedUsers = createAsyncThunk('hotel/fetchGetAllHotels', async (pageNumber: number, thunkAPI) => {
  try {
    return await UsersService.getPaginatedUsers(pageNumber);
  } catch (e) {
    toast.error(e.message, {
      position: 'top-right',
    });
    return thunkAPI.rejectWithValue(e.message);
  }
});
