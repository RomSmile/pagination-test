import { Dispatch, SetStateAction } from 'react';
import { IUser } from '@/types/interfaces';

export interface IUsersList {
  users: IUser[];
  setPageNumber: Dispatch<SetStateAction<number>>;
  totalAmount: number;
  currentPage: number;
  pageSize: number;
}
