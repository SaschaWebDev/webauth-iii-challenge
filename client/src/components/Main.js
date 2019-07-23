import React from 'react';
import { Redirect } from 'react-router-dom';

import withAuth from '../utility/withAuth';

const Main = props => {
  return <Redirect to='/users' />;
};

export default withAuth(Main);
