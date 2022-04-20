import { TimeOut } from '../request/config';
import Request from '../request/request';

const dtRequest = new Request({
  baseURL: 'http://152.136.185.210:7878/api/hy66',
  timeout: 10000,
});

export default dtRequest;
