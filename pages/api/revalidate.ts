import { withRevalidate } from 'next-dato-utils/hoc';
import { allYears, translatePath } from '@/lib/utils';
import { defaultLocale } from '@/lib/i18n';

export default withRevalidate(async (record, revalidate) => {
	const { api_key: apiKey } = record.model;
	const { slug } = record;
	const years = await allYears();
	const year = years.find(({ id }) => record.year === id);
	const prefix = !year ? '' : `/${year.title}`;
	const slugs = typeof slug === 'object' ? slug : { [defaultLocale]: slug };
	const paths = [];

	Object.keys(slugs).forEach((locale) => {
		const slug = slugs[locale];
		const localePaths = [];

		switch (apiKey) {
			case 'year':
				localePaths.push(`/${record.title}`);
				break;
			case 'general':
				localePaths.push(`/`);
				prefix && localePaths.push(`${prefix}/`);
				break;
			case 'start':
				localePaths.push('/');
				prefix && localePaths.push(`${prefix}/`);
				break;
			case 'about':
				localePaths.push(`/om/${slug}`);
				prefix && localePaths.push(`${prefix}/om/${slug}`);
				break;
			case 'program':
				localePaths.push('/program');
				localePaths.push(`/program/${slug}`);
				prefix && localePaths.push(`${prefix}/program`);
				prefix && localePaths.push(`${prefix}/program/${slug}`);

				break;
			case 'program_category':
				localePaths.push('/program');
				localePaths.push(`/program/${slug}`);
				prefix && localePaths.push(`${prefix}/program`);
				prefix && localePaths.push(`${prefix}/program/${slug}`);
				break;
			case 'participant':
				localePaths.push('/medverkande');
				localePaths.push(`/medverkande/${slug}`);
				prefix && localePaths.push(`${prefix}/medverkande`);
				prefix && localePaths.push(`${prefix}/medverkande/${slug}`);
				break;
			case 'news':
				localePaths.push('/nyheter');
				localePaths.push(`/nyheter/${slug}`);
				prefix && localePaths.push(`${prefix}/nyheter`);
				prefix && localePaths.push(`${prefix}/nyheter/${slug}`);
				break;
			case 'location':
				localePaths.push('/platser');
				localePaths.push(`/platser/${slug}`);
				prefix && localePaths.push(`${prefix}/platser`);
				prefix && localePaths.push(`${prefix}/platser/${slug}`);
				break;
			case 'exhibition':
				localePaths.push('/utstallningar-och-projekt');
				localePaths.push(`/utstallningar-och-projekt/${slug}`);
				prefix && localePaths.push(`${prefix}/utstallningar-och-projekt`);
				prefix && localePaths.push(`${prefix}/utstallningar-och-projekt/${slug}`);
				break;
			case 'partner':
				localePaths.push('/partners');
				localePaths.push(`/partners/${slug}`);
				prefix && localePaths.push(`${prefix}/partners`);
				prefix && localePaths.push(`${prefix}/partners/${slug}`);
				break;
			case 'contact':
				localePaths.push(`/kontakt`);
				prefix && localePaths.push(`${prefix}/kontakt`);
				break;
			case 'in_english':
				localePaths.push(`/in-english`);
				prefix && localePaths.push(`${prefix}/in-english`);
				break;
			default:
				break;
		}
		// Revalidate original paths before rewrites are applied
		localePaths.forEach((p) => {
			const t = translatePath(p, defaultLocale, defaultLocale, year?.title);
			paths.push(locale === defaultLocale ? t : `/${locale}${t}`);
			//paths.push(t)
		});
	});

	const revalidatePaths = [];
	paths
		.filter((p) => !p.startsWith('/en'))
		.forEach((p) => {
			revalidatePaths.push(`/en${p}`);
			revalidatePaths.push(p);
		});
	return await revalidate(revalidatePaths);
});
