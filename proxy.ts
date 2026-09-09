import createMiddleware from 'next-intl/middleware';
import { routing, general } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
	let response = handleI18nRouting(request);

	if (response.ok) {
		const [, locale, ...rest] = new URL(
			response.headers.get('x-middleware-rewrite') || request.url,
		).pathname.split('/');

		const pathname = '/' + rest.join('/');
		if (general.some((path) => pathname.startsWith(path)) || pathname === '/') return response;

		let url: URL | null = null;
		const year = parseInt(pathname.split('/')[1]);
		const searchParams = new URL(request.url).searchParams;
		if (isNaN(year))
			url = new URL(`/${locale}/${process.env.NEXT_PUBLIC_CURRENT_YEAR}${pathname}`, request.url);
		else url = new URL(`/${locale}/${year}${pathname.replace(`/${year}`, '')}`, request.url);

		response = NextResponse.rewrite(
			`${url}${searchParams.size ? `?${searchParams.toString()}` : ''}`,
			{ headers: response.headers },
		);
	}

	return response;
}

export const config = {
	matcher: [
		// Match all pathnames except for
		// - … if they start with `/api`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		'/((?!api|favicon|_next|_vercel|favicon.ico|sitemap|sitemap.xml|robots.txt|manifest.webmanifest|.*\\..*).*)',
	],
};
