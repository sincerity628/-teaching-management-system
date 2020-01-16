import request from './request';

export default {
  // authentication
  signin: (data) => request.post('/signin', data), 
};
