import { GenderEnum, StatusEnum } from '@/types/Enums';

export interface IPagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: {
    previous: string | null;
    current: string;
    next: string | null;
  };
}

export interface IMeta {
  pagination: IPagination;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  gender: GenderEnum;
  status: StatusEnum;
}
