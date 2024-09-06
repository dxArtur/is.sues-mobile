import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './routes.publics';
import { PrivateRoutes } from './routes.privates';
import { useAuth } from '../hooks/useAuth';

export function Routes() {
  const { tokenState } = useAuth();

  return (
    <NavigationContainer>
      {tokenState ? <PrivateRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
