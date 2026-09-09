import s from './page.module.scss';
import { AllYearsDocument, GeneralDocument } from '@/graphql';
import { CardContainer, Card, Thumbnail, PageHeader } from '@/components';
import { DraftMode, Markdown as Markdown } from 'next-dato-utils/components';
import { apiQuery } from 'next-dato-utils/api';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/[locale]/layout';
import { getCurrentYear, getYear } from '@/lib/utils';
import { PROJECT_NAME } from '@/lib/constant';

export type Props = {
	years: YearRecord[];
	general: GeneralRecord;
};

export default async function Archive({ params }: PageProps<'/[locale]/arkiv'>) {
	const { locale } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getCurrentYear(locale);
	const { allYears, draftUrl } = await apiQuery(AllYearsDocument, {
		variables: { locale: locale as SiteLocale },
	});

	const { general, draftUrl: draftUrlGeneral } = await apiQuery(GeneralDocument, {
		variables: { locale: locale as SiteLocale },
	});

	if (!general) return notFound();

	return (
		<>
			<PageHeader title={'Smålandstriennalen'} noPrefix={true} year={year} />
			<CardContainer key={locale} columns={2}>
				{allYears
					.filter(({ title }) => title !== year.title)
					.map(({ id, title, slug }) => (
						<Card key={id}>
							<Thumbnail title={`${PROJECT_NAME} ${title}`} slug={`/${title}`} />
						</Card>
					))}
			</CardContainer>
			<DraftMode path={'/arkiv'} url={[draftUrl, draftUrlGeneral]} />
		</>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/arkiv'>): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('archive'),
		locale: locale as SiteLocale,
		pathname: getPathname({ locale, href: { pathname: '/arkiv' } }),
	});
}
