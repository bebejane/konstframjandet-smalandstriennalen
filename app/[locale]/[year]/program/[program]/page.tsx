import { apiQuery } from 'next-dato-utils/api';
import { ProgramDocument, AllProgramsDocument } from '@/graphql';
import { Article, Related, BackButton, PageHeader, MetaSection } from '@/components';
import { formatDate, getYear, getYearId } from '@/lib/utils';
import { getPathname, Link, locales } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';

export type Props = {
	program: ProgramRecord;
};

export default async function Program({ params }: PageProps<'/[locale]/[year]/program/[program]'>) {
	const { locale, program: slug, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const { program, draftUrl } = await apiQuery(ProgramDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});

	if (!program) return notFound();
	const year = await getYear(_year, locale);
	const t = await getTranslations();

	const {
		id,
		image,
		title,
		intro,
		partipants,
		partner,
		location,
		content,
		address,
		startDate,
		externalLink,
		endDate,
		time,
		programCategory,
	} = program;

	return (
		<>
			<PageHeader title={t('Menu.program')} href={'/program'} year={year} />
			<Article
				id={id}
				key={id}
				title={title}
				image={image as FileField}
				imageSize='small'
				intro={intro}
				content={content}
				date={startDate}
			/>
			<MetaSection
				key={`${id}-meta`}
				items={[
					{ title: t('MetaSection.what'), value: programCategory?.title },
					{
						title: t('MetaSection.where'),
						value: address || location.length ? location.map(({ title }) => title) : null,
						link:
							location.length && !address ? location.map(({ slug }) => `/platser/${slug}`) : null,
					},
					{ title: t('MetaSection.when'), value: formatDate(startDate, endDate) },
					{ title: t('MetaSection.times'), value: time },
					{
						title: t('MetaSection.link'),
						value: externalLink ? t('MetaSection.webpage') : undefined,
						link: externalLink,
					},
				]}
			/>
			<Related header={t('Menu.participants')} items={partipants as ParticipantRecord[]} />
			<BackButton year={year}>{t('BackButton.showAllPrograms')}</BackButton>
			<DraftMode path={`/program/${slug}`} url={draftUrl} />
		</>
	);
}

export async function generateStaticParams({ params }: PageProps<'/[locale]/[year]/program'>) {
	const { locale, year } = await params;

	const { allPrograms } = await apiQuery(AllProgramsDocument, {
		all: true,
		variables: { locale: locale as SiteLocale, yearId: await getYearId(year, locale) },
	});
	return allPrograms.map((program) => ({ program: program.slug }));
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/program/[program]'>): Promise<Metadata> {
	const { locale, program: slug, year } = await params;
	const { program } = await apiQuery(ProgramDocument, {
		variables: { slug, locale: locale as SiteLocale },
	});
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: program?.title,
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({
			locale,
			href: { pathname: `/program/[program]`, params: { program: slug } },
		}),
	});
}
