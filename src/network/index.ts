import Request from './request/request';

import { BASE_URl, TimeOut } from './request/config';

const HsRequest = new Request({
  baseURL: BASE_URl,
  timeout: TimeOut,
});

export default HsRequest;
