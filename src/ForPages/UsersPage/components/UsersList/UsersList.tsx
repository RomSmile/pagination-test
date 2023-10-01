'use client';
import * as React from 'react';
import { FC } from 'react';
import { List } from 'antd';
import { IUsersList } from '@/ForPages/UsersPage/components/UsersList/types';
import Link from 'next/link';

const UsersList: FC<IUsersList> = ({ users, setPageNumber, totalAmount, currentPage, pageSize }) => {
  return (
    <List
      itemLayout="horizontal"
      pagination={{
        onChange: (page) => {
          setPageNumber(page);
        },
        pageSize,
        total: totalAmount,
        current: currentPage,
        showSizeChanger: false,
      }}
      dataSource={users}
      style={{
        overflowY: 'scroll',
      }}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={<Link href={`users/edit/${item.id}`}>{item.name}</Link>} description={item.email} />
        </List.Item>
      )}
    />
  );
};

export default UsersList;
