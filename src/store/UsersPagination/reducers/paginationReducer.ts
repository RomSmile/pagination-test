import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPaginatedUsers } from '@/store/UsersPagination/actions/getPaginatedUsers';
import { IUsersPaginatedResponse } from '@/services/types/TypesUserService';
import { IPagination, IUser } from '@/types/interfaces';

interface IPaginationSlice {
  users: IUser[];
  pagination: IPagination;
  isLoading: boolean;
}

const initialState: IPaginationSlice = {
  users: [],
  pagination: null,
  isLoading: true,
};

export const PaginationSlice = createSlice({
  name: 'PaginationStore',
  initialState,
  reducers: {},
  extraReducers: {
    [getPaginatedUsers.fulfilled.type]: (state, action: PayloadAction<IUsersPaginatedResponse>) => {
      const { data, meta } = action.payload;
      state.users = data;
      state.pagination = meta.pagination;
      state.isLoading = false;
    },
    [getPaginatedUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPaginatedUsers.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default PaginationSlice.reducer;
