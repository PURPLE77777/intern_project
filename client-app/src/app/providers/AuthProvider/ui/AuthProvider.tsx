'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Routes } from '@shared/model/const';

export const AuthProvider = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const isAuth = false;

  useEffect(() => {
    if (isAuth) {
      push(`${pathname}/${Routes.Home}`);
    } else {
      push(`${pathname}/${Routes.Login}`);
    }
  }, [isAuth]);
};
