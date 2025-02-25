// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   const acceptLanguage = request.headers.get('accept-language');
//   const localeLanguage = acceptLanguage?.split(',')[0];
//   const language = localeLanguage?.split('-')[0];
//   console.log('pathname', pathname);
//   const supportedLanguages = i18n.locales;
//   const userLanguage =
//     language && supportedLanguages.includes(language)
//       ? localeLanguage
//       : i18n.defaultLocale;
//   console.log('new URL', new URL(`${userLanguage}`, request.url).href);
//   if (pathname === '/') {
//     return NextResponse.redirect(new URL(`/${userLanguage}`, request.url));
//   }
//   return NextResponse.next();
// }
// export const config = {
//   matcher: ['/'],
// };
import createMiddleware from 'next-intl/middleware';

import { routing } from '@shared/lib/locale/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en)/:path*'],
};
