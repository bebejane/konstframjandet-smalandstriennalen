import * as dotenv from 'dotenv';
dotenv.config();

import { apiQuery } from 'dato-nextjs-utils/api';
import { AllExhibitionsDocument, AllProgramsDocument } from '../../graphql';

(async () => {
	const res = await apiQuery(AllExhibitionsDocument, {
		variables: { locale: 'en' },
		apiToken: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN,
	});
	console.log(res);
})();
