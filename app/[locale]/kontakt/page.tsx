import { buildMetadata } from '@/app/[locale]/layout';
import { Article, PageHeader } from '@/components';
import { ContactDocument } from '@/graphql';
import { getPathname, locales } from '@/i18n/routing';
import { getCurrentYear } from '@/lib/utils';
import { Metadata } from 'next';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export type Props = {
	contact: ContactQuery['contact'];
};

export default async function Contact({ params }: PageProps<'/[locale]/kontakt'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getCurrentYear(locale);
	const { contact, draftUrl } = await apiQuery(ContactDocument, {
		variables: { locale: locale as SiteLocale },
	});
	if (!contact) return notFound();

	const t = await getTranslations('Menu');
	const { id, title, image, intro, content, _seoMetaTags } = contact;

	return (
		<>
			<PageHeader title={t('contact')} year={year} />
			<Article
				id={id}
				key={id}
				title={title}
				image={image as FileField}
				intro={intro}
				imageSize='small'
				content={content}
			/>
			<DraftMode path={'/kontakt'} url={draftUrl} />
		</>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/kontakt'>): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('contact'),
		locale: locale as SiteLocale,
		pathname: getPathname({ locale, href: { pathname: '/kontakt' } }),
	});
}
