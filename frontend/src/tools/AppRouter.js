import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChooseClass from '../pages/class/ChooseClass';
import ChooseClassStatus from '../pages/class/ChooseClassStatus';
import MyClass from '../pages/class/MyClass';
import Home from '../pages/home/Home';
import Staff from '../pages/list/Staff';
import Student from '../pages/list/Student';
import StaffProfile from '../pages/profile/StaffProfile';
import StudentProfile from '../pages/profile/StudentProfile';
import Score from '../pages/score/Score';
import ScoreStatus from '../pages/score/ScoreStatus';

const AppRouter = () =>  {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/choose-class" component={ChooseClass} />
      <Route path="/choose-class-status" component={ChooseClassStatus} />
      <Route path="/my-class" component={MyClass} />
      <Route path="/staffs" component={Staff} />
      <Route path="/students" component={Student} />
      <Route path="/student-profile/:id" component={StudentProfile} />
      <Route path="/staff-profile/:id" component={StaffProfile} />
      <Route path="/score" component={Score} />
      <Route path="/score-status" component={ScoreStatus} />
    </Switch>
  );
};

export default AppRouter;
