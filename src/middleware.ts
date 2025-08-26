import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const localeCookie = request.cookies.get('locale');
  if (!localeCookie) {
    const acceptLang = request.headers.get('accept-language');
    let locale = 'en';
    if (acceptLang) {
      locale = acceptLang.split(',')[0].split('-')[0];
    }
    // Log to verify middleware runs
    console.log('Middleware: setting locale cookie to', locale);
    const response = NextResponse.next();
    response.cookies.set('locale', locale, { path: '/' });
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};
