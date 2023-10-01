import ApiService from '@/services/ApiService';
import { IGetPaginatedUsersRequest, IUsersPaginatedResponse } from '@/services/types/TypesUserService';
import { IUser } from '@/types/interfaces';
import { GenderEnum, StatusEnum } from '@/types/Enums';
import { toast } from 'react-toastify';

class UsersService extends ApiService {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async getPaginatedUsers({
    pageNumber,
    searchValue,
    genderValue,
  }: IGetPaginatedUsersRequest): Promise<IUsersPaginatedResponse> {
    const response = await this.requester(
      `${this.baseUrl}v1/users?page=${pageNumber}${searchValue.length ? `&name=${searchValue}` : ''}${
        genderValue !== null ? `&gender=${GenderEnum[genderValue]}` : ''
      }`,
    );
    return response.data;
  }

  async getUserById(id: string): Promise<IUser> {
    const response = await this.requester(`${this.baseUrl}v2/users/${id}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
    return response.data;
  }

  async editUser(user: IUser): Promise<{ status: number }> {
    try {
      const response = await this.requester(`${this.baseUrl}v2/users/${user.id}`, {
        method: 'PATCH',
        data: {
          ...user,
          status: Number.isInteger(user.status) ? StatusEnum[user.status] : user.status,
          gender: Number.isInteger(user.gender) ? GenderEnum[user.gender] : user.gender,
        },
        headers: this.getHeaders(),
      });

      if (response.status === 200) {
        toast.success('Success save');
      }

      return response;
    } catch (e) {
      toast.error(e.response.data.message);
      return e.response;
    }
  }
}

export default new UsersService(process.env.BASE_API_URL ?? '');
