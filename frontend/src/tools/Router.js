import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/authentication/Signin';
import Signup from '../pages/authentication/Signup';

const Router = () =>  {
  return (
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default Router;
