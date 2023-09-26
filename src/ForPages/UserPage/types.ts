import { Dispatch, FC, SetStateAction } from 'react';
import { IUser } from '@/types/interfaces';

export interface IUserPage {
  user: IUser;
}

export interface IDefaultComponentProps {
  newUser: IUser;
  setNewUser: Dispatch<SetStateAction<IUser>>;
}

export interface IStep {
  title: string;
  children: FC<IDefaultComponentProps>;
  name: 'name' | 'email' | 'status' | 'gender';
}
