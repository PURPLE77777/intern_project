import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('request', request);
  return NextResponse.redirect(new URL('/', request.url));
}
