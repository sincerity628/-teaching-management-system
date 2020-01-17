import request from './request';

export default {
  // authentication
  signin: (data) => request.post('/signin', data),
  // student
  getAllStudents: () => request.get('/students'),
  getStudent: (id) => request.get(`/students/${id}`),
  // staff
  getAllStaffs: () => request.get('/staffs'),
  getStaff: (id) => request.get(`/staffs/${id}`),
  // class
  getAllClasses: (searchText) => request.get(`/classes/${searchText}`), 
};
