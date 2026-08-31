import s from './page.module.scss';
import { AllProgramsDocument, AllProgramCategoriesDocument } from '@/graphql';
import { CardContainer, Card, Thumbnail, FilterBar, PageHeader } from '@/components';
import { formatDate, getYear } from '@/lib/utils';
import { isAfter } from 'date-fns';
import { apiQuery } from 'next-dato-utils/api';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getPathname, locales } from '@/i18n/routing';
import { createLoader, parseAsString } from 'nuqs/server';
import { buildMetadata } from '@/app/[locale]/layout';
import { Metadata } from 'next';

export type Props = {
	programs: ProgramRecord[];
	programCategories: ProgramCategoryRecord[];
};

const filterParams = {
	category: parseAsString.withDefault(''),
};

const loadSearchParams = createLoader(filterParams);

export default async function Program({
	params,
	searchParams,
}: PageProps<'/[locale]/[year]/program'>) {
	const { locale, year: _year } = await params;
	if (!locales.includes(locale as any)) return notFound();
	setRequestLocale(locale);

	const year = await getYear(_year, locale);
	if (!year) return notFound();

	const t = await getTranslations();
	const { category } = await loadSearchParams(searchParams);
	const isArchive = year.title !== process.env.NEXT_PUBLIC_CURRENT_YEAR;
	const pathname = getPathname({
		locale,
		href: {
			pathname: _year ? '/[year]/program' : '/program',
			params: { year: _year },
		},
	});

	const [{ allPrograms, draftUrl }, { allProgramCategories, draftUrl: draftUrlCategories }] =
		await Promise.all([
			apiQuery(AllProgramsDocument, {
				all: true,
				variables: { locale: locale as SiteLocale, yearId: year?.id },
			}),
			apiQuery(AllProgramCategoriesDocument, {
				variables: { locale: locale as SiteLocale, yearId: year?.id },
			}),
		]);

	const categoryFilter = ({
		programCategory: { id, title },
	}: AllProgramsQuery['allPrograms'][number]) => !category || category === title;

	const key = `${category}-${pathname}`;
	const haveProgramItems = allPrograms.filter(categoryFilter).length > 0;
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const pastPrograms = allPrograms
		.filter(
			({ startDate, endDate }) =>
				!isArchive &&
				isAfter(today, new Date(startDate)) &&
				(!endDate || isAfter(today, new Date(endDate))),
		)
		.filter(categoryFilter);

	const comingPrograms = allPrograms
		.filter(({ id }) => pastPrograms.find(({ id: _id }) => _id === id) === undefined)
		.filter(categoryFilter);

	return (
		<>
			<PageHeader title={t('Menu.program')} />
			<FilterBar
				name='category'
				value={category}
				params={{ category }}
				pathname={pathname}
				options={allProgramCategories
					.filter(({ id }) => allPrograms.some(({ programCategory }) => programCategory.id === id))
					.map(({ title, desc }) => ({
						title,
						description: desc,
					}))}
			/>
			{haveProgramItems ? (
				<CardContainer key={`${category}-${pathname}`}>
					{comingPrograms
						.filter(categoryFilter)
						.map(({ id, image, title, intro, slug, startDate, endDate, programCategory }) => (
							<Card key={id}>
								<Thumbnail
									title={title}
									titleRows={2}
									image={image as FileField}
									intro={intro}
									meta={`${formatDate(startDate, endDate)}${programCategory.title ? ` • ${programCategory.title}` : ''}`}
									slug={`/program/${slug}`}
								/>
							</Card>
						))}
				</CardContainer>
			) : (
				<p className={s.nomatch}>{t('Program.noProgramItems')}</p>
			)}
			{pastPrograms.filter(categoryFilter).length > 0 && (
				<>
					<h2 className={s.subheader}>{t('Program.finished')}</h2>
					<CardContainer key={`${category}-${pathname}`}>
						{pastPrograms
							.filter(categoryFilter)
							.map(({ id, image, title, intro, slug, startDate, endDate, programCategory }) => (
								<Card key={id}>
									<Thumbnail
										title={title}
										titleRows={2}
										image={image as FileField}
										intro={intro}
										meta={`${formatDate(startDate, endDate)} • ${programCategory.title}`}
										slug={`/program/${slug}`}
									/>
								</Card>
							))}
					</CardContainer>
				</>
			)}
		</>
	);
}

export async function generateMetadata({
	params,
}: PageProps<'/[locale]/[year]/program'>): Promise<Metadata> {
	const { locale, year } = await params;
	const t = await getTranslations('Menu');
	return await buildMetadata({
		title: t('program'),
		locale: locale as SiteLocale,
		year,
		pathname: getPathname({ locale, href: { pathname: '/program' } }),
	});
}
