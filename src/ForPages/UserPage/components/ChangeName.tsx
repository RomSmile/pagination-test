import { FC } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IDefaultComponentProps } from '@/ForPages/UserPage/types';

export const ChangeName: FC<IDefaultComponentProps> = ({ newUser, setNewUser }) => {
  return (
    <Input
      size="large"
      placeholder="Enter the name"
      prefix={<UserOutlined />}
      value={newUser.name}
      style={{ width: '320px' }}
      onChange={(e) => {
        setNewUser({ ...newUser, name: e.target.value });
      }}
    />
  );
};
