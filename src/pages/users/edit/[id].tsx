import UsersService from '@/services/UsersService';
import UserPage from '@/ForPages/UserPage';
import { NextPageContext } from 'next';
import { IUser } from '@/types/interfaces';
import { CenteredErrorMessage } from '@/components';

export default function User({ user, error }: { user: IUser; error: string }) {
  return user === null ? <CenteredErrorMessage message={error} /> : <UserPage user={user as IUser} />;
}

export async function getServerSideProps(context: NextPageContext) {
  try {
    const response = await UsersService.getUserById(context.query.id as string);

    return {
      props: {
        user: response,
        error: '',
      },
    };
  } catch (e) {
    return {
      props: {
        user: null as IUser,
        error: e.message,
      },
    };
  }
}
