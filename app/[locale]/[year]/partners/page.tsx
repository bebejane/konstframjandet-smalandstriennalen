import s from './page.module.scss';
import cn from 'classnames';
import { AllLocationsDocument, AllPartnersDocument } from '@/graphql';
import { CardContainer, Card, Thumbnail, PageHeader } from '@/components';
import { Image } from 'react-datocms';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { apiQuery } from 'next-dato-utils/api';
import { getPathname, locales } from '@/i18n/routing';
import { DraftMode } from 'next-dato-utils/components';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';
import { getYear, getYearId } from '@/lib/utils';

export type Props = {
	partners: PartnerRecord[];
	locations: LocationRecord[];
	financiers: YearRecord;
};

export default async function Partners({ params }: PageProps<'/[locale]/[year]/partners'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getYear(_year, locale);
	const { allPartners, financiers, draftUrl } = await apiQuery(AllPartnersDocument, {
		variables: { locale: locale as SiteLocale, yearId: year.id },
	});
	const { allLocations, draftUrl: draftUrlLocations } = await apiQuery(AllLocationsDocument, {
		variables: { locale: locale as SiteLocale, yearId: year.id },
	});
	const t = await getTranslations();

	return (
		<>
			<PageHeader title={t('Menu.partners')} year={year} />
			{allLocations.length > 0 && (
				<>
					<h2 id='locations' className={cn(s.head, s.locations)}>
						{t('Menu.locations')}
					</h2>
					<CardContainer className={s.locations}>
						{allLocations.map(({ id, image, title, intro, slug, year }) => (
							<Card key={id}>
								<Thumbnail
									title={title}
									image={image as FileField}
									intro={intro}
									titleRows={1}
									slug={`/platser/${slug}`}
									year={year as YearRecord}
								/>
							</Card>
						))}
					</CardContainer>
				</>
			)}

			<h2 className={s.head}>Partners</h2>
			<CardContainer>
				{allPartners.map(({ id, image, slug }) => (
					<Card key={id}>
						<Thumbnail
							slug={`/partners/${slug}`}
							image={image as FileField}
							zoomOutOnHover={true}
							year={year}
						/>
					</Card>
				))}
			</CardContainer>

			{financiers?.fundedBy && financiers?.fundedBy.length > 0 && (
				<section className={s.financiers}>
					<h2 className={s.head}>{t('Partners.supportedBy')}</h2>
					<ul>
						{financiers.fundedBy.map(({ id, url, logo }) => (
							<li key={id}>
								{logo?.responsiveImage && (
									<Image data={logo.responsiveImage} className={s.image} objectFit={'contain'} />
								)}
							</li>
						))}
					</ul>
				</section>
			)}
			<DraftMode path={'/partners'} url={[draftUrl, draftUrlLocations]} />
		</>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/partners'>): Promise<Metadata> {
	const { locale, year } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('partners'),
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({ locale, href: { pathname: '/partners' } }),
	});
}
