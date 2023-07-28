'use client';

import { User } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';


export default function NextAuthProvider({ children }: NextAuthProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}