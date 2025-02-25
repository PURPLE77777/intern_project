import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import IntlProvider from '@app/providers/IntlProvider';

import '@shared/config/theme/globals.css';
import { routing } from '@shared/lib/locale/routing';
import { LocatedPropType } from '@shared/model/types/locale.type';
import LocaleComponent from '@shared/ui/LocaleComponent';

export async function generateMetadata({
  params,
}: LocatedPropType): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      default: t('title'),
      template: '%s | Instagram',
    },
    description: 'Social network',
    generator: 'Next.js',
    applicationName: 'Instagram',
    referrer: 'origin-when-cross-origin',
    keywords: ['Instagram', 'social', 'network', 'app'],
    authors: [
      { name: 'PURPLE', url: 'https://github.com/PURPLE77777/intern_project' },
    ],
    creator: 'PURPLE',
    publisher: 'PURPLE',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
      // languages: {
      //   'en-US': '/en-US',
      //   'de-DE': '/de-DE',
      // },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

interface IRootLayout extends LocatedPropType {
  children: ReactNode;
}

export async function RootLayout({ children, params }: IRootLayout) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className='common' data-theme='dark'>
        <LocaleComponent params={params}>
          <div
            id='app'
            className='font-roboto bg-surfaceContainer text-onSurface h-full w-full'>
            <IntlProvider>{children}</IntlProvider>
          </div>
        </LocaleComponent>
      </body>
    </html>
  );
}
