import { FC } from 'react';
import { IDefaultComponentProps } from '@/ForPages/UserPage/types';
import { GenderEnum } from '@/types/Enums';
import { StyledSelect } from '@/ForPages/UserPage/styled';
import { genders } from '@/constants';

export const ChangeGender: FC<IDefaultComponentProps> = ({ newUser, setNewUser }) => {
  return (
    <StyledSelect
      value={typeof newUser.gender === 'string' ? GenderEnum[newUser.gender] : newUser.gender}
      onChange={(value: GenderEnum) => {
        setNewUser({ ...newUser, gender: value });
      }}
      options={genders}
    />
  );
};
