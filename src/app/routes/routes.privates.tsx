// import React from 'react';
// import { useAuth } from '@/src/app/contexts/AuthContext';
// import { Redirect } from 'expo-router';

// interface PrivateRouteProps {
//   children: React.ReactNode;
// }

// export default function PrivateRoute({ children }: PrivateRouteProps) {
//   const { user } = useAuth();

//   if (!user) {
//     // Se o usuário não estiver autenticado, redireciona para a tela App.tsx
//     return <Redirect href="/signin" />;
//   }

  
//   return <>{children}</>;
// }