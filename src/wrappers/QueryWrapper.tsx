'use client';
import { ChildrenProps } from '@/interfaces/children';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const QueryWrapper = ({ children }: ChildrenProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryWrapper;
