import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
	const locale = (await requestLocale) ?? (routing.defaultLocale as SiteLocale);
	if (!routing.locales.includes(locale as any)) notFound();
	const messages: any = (await import(`./${locale}.json`)).default;
	return {
		locale,
		messages,
	};
});
