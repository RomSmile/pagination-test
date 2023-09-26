import { IMeta, IUser } from '@/types/interfaces';

export interface IUsersPaginatedResponse {
  meta: IMeta;
  data: IUser[];
}
