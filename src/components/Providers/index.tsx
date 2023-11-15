'use client';

import { PropsWithChildren } from 'react';

import QueryProvider from './QueryProvider';
import ThemeProvider from './ThemeProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
};

export default Providers;
