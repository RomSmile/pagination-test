import { FC } from 'react';
import { IDefaultComponentProps } from '@/ForPages/UserPage/types';
import { Input } from 'antd';

export const ChangeEmail: FC<IDefaultComponentProps> = ({ newUser, setNewUser }) => {
  return (
    <Input
      size="large"
      placeholder="Enter the email"
      value={newUser.email}
      style={{ width: '320px' }}
      onChange={(e) => {
        setNewUser({ ...newUser, email: e.target.value });
      }}
    />
  );
};
