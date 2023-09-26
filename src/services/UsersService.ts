import ApiService from '@/services/ApiService';
import { IUsersPaginatedResponse } from '@/services/types/TypesUserService';
import { IUser } from '@/types/interfaces';
import { GenderEnum, StatusEnum } from '@/types/Enums';
import { toast } from 'react-toastify';

class UsersService extends ApiService {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async getPaginatedUsers(page: number): Promise<IUsersPaginatedResponse> {
    const response = await this.requester(`${this.baseUrl}v1/users?page=${page}`);
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
          status: user.status === 0 || user.status === 1 ? StatusEnum[user.status] : user.status,
          gender: user.gender === 0 || user.gender === 1 ? GenderEnum[user.gender] : user.gender,
        },
        headers: this.getHeaders(),
      });

      return response;
    } catch (e) {
      toast.error(e.response.data.message);
      return e.response;
    }
  }
}

export default new UsersService(process.env.BASE_API_URL ?? '');
