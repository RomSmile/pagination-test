import { FC } from 'react';
import { IDefaultComponentProps } from '@/ForPages/UserPage/types';
import { StatusEnum } from '@/types/Enums';
import { statuses } from '@/ForPages/UserPage/defaultValues';
import { StyledSelect } from '@/ForPages/UserPage/styled';

export const ChangeStatus: FC<IDefaultComponentProps> = ({ newUser, setNewUser }) => {
  return (
    <StyledSelect
      value={typeof newUser.status === 'string' ? StatusEnum[newUser.status as 'active' | 'inactive'] : newUser.status}
      style={{ width: 320 }}
      onChange={(value: StatusEnum) => {
        setNewUser({ ...newUser, status: value });
      }}
      options={statuses}
    />
  );
};
