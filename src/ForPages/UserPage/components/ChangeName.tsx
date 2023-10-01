import { FC } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { IDefaultComponentProps } from '@/ForPages/UserPage/types';
import { StyledInput } from '@/ForPages/UserPage/styled';

export const ChangeName: FC<IDefaultComponentProps> = ({ newUser, setNewUser }) => {
  return (
    <StyledInput
      size="large"
      placeholder="Enter the name"
      prefix={<UserOutlined />}
      value={newUser.name}
      onChange={(e) => {
        setNewUser({ ...newUser, name: e.target.value });
      }}
    />
  );
};
