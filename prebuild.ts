import 'dotenv/config';
import fs from 'fs';
import { apiQuery } from 'next-dato-utils/api';
import { AllYearsDocument } from '@/graphql';

(async () => {
	const { allYears } = await apiQuery(AllYearsDocument, {
		all: true,
		apiToken: process.env.DATOCMS_API_TOKEN,
		stripStega: true,
	});
	if (!allYears.length) throw new Error('No years found!');
	fs.writeFileSync('./years.json', JSON.stringify(allYears, null, 2));
})();
