import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname, search } = request.nextUrl;

    // Если на главной (`/`), редиректим на `/en`
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/pl${search}`, request.url));
    }

    return NextResponse.next();
}

// Запускаем middleware только для страниц (не assets)
export const config = {
    matcher: ['/'],
};