import { FC } from 'react';
import { IDefaultComponentProps } from '@/ForPages/UserPage/types';
import { StyledInput } from '@/ForPages/UserPage/styled';

export const ChangeEmail: FC<IDefaultComponentProps> = ({ newUser, setNewUser }) => {
  return (
    <StyledInput
      size="large"
      placeholder="Enter the email"
      value={newUser.email}
      onChange={(e) => {
        setNewUser({ ...newUser, email: e.target.value });
      }}
    />
  );
};
