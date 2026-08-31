import { apiQuery } from 'next-dato-utils/api';
import { AboutDocument, AllAboutsDocument } from '@/graphql';
import { Article, PageHeader } from '@/components';
import { notFound } from 'next/navigation';
import { getPathname, locales } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { getYear } from '@/lib/utils';

export type Props = {
	about: AboutRecord;
	shortcuts?: (
		AboutRecord | ExhibitionRecord | ProgramRecord | ParticipantRecord | PartnerRecord
	)[];
};

export default async function AboutPage({ params }: PageProps<'/[locale]/[year]/om/[about]'>) {
	const { locale, about: slug, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const t = await getTranslations('Menu');
	const year = await getYear(_year, locale);
	if (!year) return notFound();

	const { about, draftUrl } = await apiQuery(AboutDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});

	if (!about) return notFound();

	const { id, image, title, intro, content, _seoMetaTags } = about;

	return (
		<>
			<PageHeader title={t('about')} href={slug ? '/om' : undefined} year={year} />
			<Article
				id={id}
				key={id}
				title={title}
				image={image as FileField}
				intro={intro}
				content={content}
			/>

			<DraftMode path={`/om/${slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams({ params }: PageProps<'/[locale]/[year]/om'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();

	const { allAbouts } = await apiQuery(AllAboutsDocument, {
		all: true,
		variables: {
			locale: locale as SiteLocale,
		},
	});

	const paths = allAbouts
		.filter(({ year }) =>
			_year ? year?.title === _year : year?.title === process.env.NEXT_PUBLIC_CURRENT_YEAR || !year,
		)
		.map((about) => ({ about: about.slug }));
	return paths;
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/om/[about]'>): Promise<Metadata> {
	const { locale, about: slug, year } = await params;
	const { about } = await apiQuery(AboutDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: about?.title,
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({
			locale,
			href: { pathname: `/om/[about]`, params: { about: slug } },
		}),
	});
}
