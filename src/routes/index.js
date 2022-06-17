import React from 'react';

import { useAuth } from '../hooks/auth';
import AuthStack from './AuthStack';
import FooterNavigator from './FooterNavigator';
import AdminStack from './AdminStack';

const Routes = () => {
  const { isAdmin, data } = useAuth();

  if (!data.token) {
    return <AuthStack />;
  }

  if (isAdmin) {
    return <AdminStack />;
  }

  return <FooterNavigator />;
};

export default Routes;
