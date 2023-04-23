import * as dotenv from 'dotenv'
dotenv.config({ path: "./.env" });

import { apiQuery } from 'dato-nextjs-utils/api';
import { AllYearsDocument } from '../../graphql';
import fs from 'fs'

(async () => {
	const { years } = await apiQuery(AllYearsDocument, { apiToken: process.env.GRAPHQL_API_TOKEN })
	if (!years.length) throw new Error("No years found!");
	fs.writeFileSync("./lib/years.json", JSON.stringify(years, null, 2));
	console.log(`generated years.json (${years.length})`);
})();
