import { createAsyncThunk } from '@reduxjs/toolkit';
import UsersService from '@/services/UsersService';
import { toast } from 'react-toastify';
import { IGetPaginatedUsersRequest } from '@/services/types/TypesUserService';

export const getPaginatedUsers = createAsyncThunk(
  'fetchAllUsers',
  async (filters: IGetPaginatedUsersRequest, thunkAPI) => {
    try {
      return await UsersService.getPaginatedUsers(filters);
    } catch (e) {
      toast.error(e.message, {
        position: 'top-right',
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
