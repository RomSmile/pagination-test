import { FC } from 'react';
import { IDefaultComponentProps } from '@/ForPages/UserPage/types';
import { GenderEnum } from '@/types/Enums';
import { genders } from '@/ForPages/UserPage/defaultValues';
import { StyledSelect } from '@/ForPages/UserPage/styled';

export const ChangeGender: FC<IDefaultComponentProps> = ({ newUser, setNewUser }) => {
  return (
    <StyledSelect
      value={typeof newUser.gender === 'string' ? GenderEnum[newUser.gender as 'male' | 'female'] : newUser.gender}
      style={{ width: 320 }}
      onChange={(value: GenderEnum) => {
        setNewUser({ ...newUser, gender: value });
      }}
      options={genders}
    />
  );
};
