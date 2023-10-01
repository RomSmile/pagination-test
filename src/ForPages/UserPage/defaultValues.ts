import { StatusEnum } from '@/types/Enums';
import { ChangeEmail, ChangeGender, ChangeName, ChangeStatus } from './components';
import { IStep } from '@/ForPages/UserPage/types';

export const steps: IStep[] = [
  {
    title: 'Name',
    children: ChangeName,
    name: 'name',
  },
  {
    title: 'Email',
    children: ChangeEmail,
    name: 'email',
  },
  {
    title: 'Status',
    children: ChangeStatus,
    name: 'status',
  },
  {
    title: 'Gender',
    children: ChangeGender,
    name: 'gender',
  },
];

export const statuses = [
  { value: StatusEnum.inactive, label: 'inactive' },
  { value: StatusEnum.active, label: 'active' },
];

export const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
