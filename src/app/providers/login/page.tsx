import React, { Suspense } from 'react';
import LoginPage from './LoginPage';

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}
