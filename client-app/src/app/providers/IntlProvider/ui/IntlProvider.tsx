import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

interface IIntlProvider {
  children: ReactNode;
}

export const IntlProvider = async ({ children }: IIntlProvider) => {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
