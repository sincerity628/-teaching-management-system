import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/authentication/Signin';

const Router = () =>  {
  return (
    <Switch>
      <Route path="/signin" component={Signin} />
    </Switch>
  );
};

export default Router;
