'use client';
import { useEffect, useState } from 'react';
import { Spinner } from '@/components';
import UsersList from '@/ForPages/UsersPage/components/UsersList';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getPaginatedUsers } from '@/store/UsersPagination/actions/getPaginatedUsers';
import Filters from '@/ForPages/UsersPage/components/Filters';
import { ListContainer } from '@/ForPages/UsersPage/styled';
import { GenderEnum } from '@/types/Enums';
import { useDebounce } from '@/hooks/useDebounce';

const UsersPage = () => {
  const {
    query: { page, gender, search },
    isReady,
    replace,
  } = useRouter();
  const [pageNumber, setPageNumber] = useState(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const { debouncedValue, onSetDebounceValue } = useDebounce(searchValue, 500);
  const [genderValue, setGenderValue] = useState<GenderEnum | null>(null);
  const dispatch = useAppDispatch();
  const { users, pagination, isLoading } = useAppSelector((state) => state.paginationReducer);
  const getUsers = async (): Promise<void> => {
    dispatch(getPaginatedUsers({ pageNumber, searchValue: debouncedValue, genderValue }));

    await replace({
      query: {
        page: pageNumber,
        ...(debouncedValue.length && { search: debouncedValue }),
        ...(genderValue !== null ? { gender: genderValue } : {}),
      },
    });
  };

  useEffect(() => {
    if (pageNumber) {
      (async () => {
        await getUsers();
      })();
    }
  }, [pageNumber, debouncedValue, genderValue]);

  useEffect(() => {
    if (isReady) {
      !isNaN(Number(page)) && Boolean(page) ? setPageNumber(Number(page)) : setPageNumber(1);

      if (Number(gender) === GenderEnum.male || Number(gender) === GenderEnum.female) {
        setGenderValue(Number(gender));
      } else {
        setGenderValue(null);
      }
      if (search) {
        setSearchValue(search as string);
        onSetDebounceValue(search as string);
      } else {
        setSearchValue('');
      }
    }
  }, [isReady]);

  return (
    <>
      <Spinner loading={isLoading} />
      <ListContainer>
        <Filters
          searchValue={searchValue}
          genderValue={genderValue}
          setGenderValue={setGenderValue}
          setSearchValue={setSearchValue}
        />
        {pagination ? (
          <UsersList
            users={users}
            setPageNumber={setPageNumber}
            currentPage={pageNumber}
            totalAmount={pagination.total}
            pageSize={pagination.limit}
          />
        ) : (
          <div>We don't have any options</div>
        )}
      </ListContainer>
    </>
  );
};

export default UsersPage;
