import request from './request';

export default {
  // authentication
  signin: (data) => request.post('/signin', data),
  // student
  getAllStudents: () => request.get('/students'),
  // staff
  getAllStaffs: () => request.get('/staffs'),
};
