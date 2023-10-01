import { GenderEnum } from '@/types/Enums';
import { Dispatch, SetStateAction } from 'react';

export interface IFilters {
  genderValue: GenderEnum | null;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setGenderValue: Dispatch<SetStateAction<GenderEnum>>;
}
