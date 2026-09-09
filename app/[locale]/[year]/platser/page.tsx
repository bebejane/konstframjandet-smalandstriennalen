import { AllLocationsDocument } from '@/graphql';
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
	exhibitions: (LocationRecord & ThumbnailImage)[];
};

export default async function Location({ params }: PageProps<'/[locale]/[year]/platser'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getYear(_year, locale);
	const { allLocations, draftUrl } = await apiQuery(AllLocationsDocument, {
		variables: { locale: locale as SiteLocale },
	});
	const t = await getTranslations();

	return (
		<>
			<PageHeader title={t('Menu.locations')} year={year} />
			{/* <Markdown className={s.intro} content={year.introLocations} /> */}
			<CardContainer columns={3}>
				{allLocations.map(({ id, image, title, intro, slug }) => (
					<Card key={id}>
						<Thumbnail
							title={title}
							titleRows={1}
							image={image as FileField}
							intro={intro}
							slug={`/platser/${slug}`}
							year={year}
						/>
					</Card>
				))}
			</CardContainer>
			<DraftMode path={'/platser'} url={draftUrl} />
		</>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/platser'>): Promise<Metadata> {
	const { locale, year } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('exhibitions'),
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({ locale, href: { pathname: '/platser' } }),
	});
}
