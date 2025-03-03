import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname, search } = request.nextUrl;

    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/pl${search}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};