import axios from 'axios';

class ApiService {
  protected readonly baseUrl: string;
  protected readonly requester;

  constructor(baseUrl: string) {
    this.baseUrl = `${baseUrl}`;
    this.requester = axios.request.bind(axios);
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${process.env.TOKEN_DATA}`,
      'Content-Type': 'application/json',
    };
  }
}

export default ApiService;
