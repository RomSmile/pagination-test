import { GenderEnum } from '@/types/Enums';

export const genders = [
  { value: GenderEnum.female, label: 'female' },
  { value: GenderEnum.male, label: 'male' },
];

export const gendersForSearch = [{ value: null, label: 'none' }, ...genders];
