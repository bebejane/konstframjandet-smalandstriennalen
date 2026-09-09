import { AllExhibitionsDocument } from '@/graphql';
import { CardContainer, Card, Thumbnail, PageHeader } from '@/components';
import { formatDate, getYear } from '@/lib/utils';
import { DraftMode } from 'next-dato-utils/components';
import { apiQuery } from 'next-dato-utils/api';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, locales } from '@/i18n/routing';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';

export type Props = {
	exhibitions: (ExhibitionRecord & ThumbnailImage)[];
};

export default async function Exhibition({
	params,
}: PageProps<'/[locale]/[year]/utstallningar-och-projekt'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getYear(_year, locale);
	const { allExhibitions, draftUrl } = await apiQuery(AllExhibitionsDocument, {
		variables: { locale: locale as SiteLocale },
	});
	const t = await getTranslations();

	return (
		<>
			<PageHeader title={t('Menu.exhibitions')} year={year} />
			{/* <Markdown className={s.intro} content={year.introExhibitions} /> */}
			<CardContainer columns={3}>
				{allExhibitions.map(({ id, image, title, startDate, endDate, slug, location }) => (
					<Card key={id}>
						<Thumbnail
							title={title}
							titleRows={1}
							image={image as FileField}
							meta={`${startDate ? `${formatDate(startDate, endDate)} • ` : ''}${location
								.map((l) => l.title)
								.join(', ')}`}
							slug={`/utstallningar-och-projekt/${slug}`}
							year={year}
						/>
					</Card>
				))}
			</CardContainer>
			<DraftMode path={'/utstallningar-och-projekt'} url={draftUrl} />
		</>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/utstallningar-och-projekt'>): Promise<Metadata> {
	const { locale, year } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('exhibitions'),
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({ locale, href: { pathname: '/utstallningar-och-projekt' } }),
	});
}
