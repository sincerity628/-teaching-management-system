import request from './request';

export default {
  // authentication
  signin: (data) => request.post('/signin', data),
  // student
  getAllStudent: () => request.get('/students'),
  // staff
  getAllStaff: () => request.get('/staffs'),
};
