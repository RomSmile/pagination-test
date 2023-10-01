import { IMeta, IUser } from '@/types/interfaces';
import { GenderEnum } from '@/types/Enums';

export interface IUsersPaginatedResponse {
  meta: IMeta;
  data: IUser[];
}

export interface IGetPaginatedUsersRequest {
  pageNumber: number;
  searchValue: string;
  genderValue: GenderEnum | null;
}
