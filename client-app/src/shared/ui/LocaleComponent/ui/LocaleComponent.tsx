import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

import { LocaleType } from '@shared/model/types/locale.type';

interface ILocaleComponent {
  params: Promise<LocaleType>;
  children?: ReactNode;
}

export const LocaleComponent = async ({
  params,
  children,
}: ILocaleComponent) => {
  const { locale } = await params;

  setRequestLocale(locale);

  return children;
};
