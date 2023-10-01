import { FC } from 'react';
import { IFilters } from './types';
import { GenderEnum } from '@/types/Enums';
import { gendersForSearch } from '@/constants';
import { FilterContainer, StyledInputSearch, StyledSelectSearch } from '@/ForPages/UsersPage/components/Filters/styled';

const Filters: FC<IFilters> = ({ searchValue, genderValue, setSearchValue, setGenderValue }) => {
  return (
    <FilterContainer>
      <StyledInputSearch
        placeholder="Enter the user name"
        size="large"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <StyledSelectSearch
        value={genderValue}
        onChange={(value: GenderEnum | null) => {
          setGenderValue(value);
        }}
        options={gendersForSearch}
      />
    </FilterContainer>
  );
};

export default Filters;
