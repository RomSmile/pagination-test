'use client';
import { useEffect, useState } from 'react';
import { Spinner } from '@/components';
import UsersList from '@/ForPages/UsersPage/components/UsersList';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getPaginatedUsers } from '@/store/UsersPagination/actions/getPaginatedUsers';

const UsersPage = () => {
  const {
    query: { page },
    isReady,
    replace,
  } = useRouter();
  const [pageNumber, setPageNumber] = useState(null);
  const dispatch = useAppDispatch();
  const { users, pagination, isLoading } = useAppSelector((state) => state.paginationReducer);
  const getUsers = async (): Promise<void> => {
    dispatch(getPaginatedUsers(pageNumber));

    await replace({ query: { page: pageNumber } });
  };

  useEffect(() => {
    if (pageNumber) {
      getUsers();
    }
  }, [pageNumber]);

  useEffect(() => {
    if (isReady && !isNaN(Number(page)) && Boolean(page)) {
      setPageNumber(Number(page));
    } else if (isReady) {
      setPageNumber(1);
    }
  }, [isReady]);

  return (
    <>
      <Spinner loading={isLoading} />
      {pagination ? (
        <UsersList
          users={users}
          setPageNumber={setPageNumber}
          currentPage={pageNumber}
          totalAmount={pagination.total}
          pageSize={pagination.limit}
        />
      ) : (
        <div style={{ color: '#fff' }}>We do&aposnot have any options</div>
      )}
    </>
  );
};

export default UsersPage;
