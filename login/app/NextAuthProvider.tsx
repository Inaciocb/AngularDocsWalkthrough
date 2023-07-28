'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface NextAuthProps {
    children: ReactNode;
}

export default function NextAuthProvider({ children }: NextAuthProps) {
  return <SessionProvider>{children}</SessionProvider>;
}