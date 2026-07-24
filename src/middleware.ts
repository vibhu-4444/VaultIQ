import { NextResponse } from 'next/server';

// Middleware is disabled for static GitHub Pages export
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
