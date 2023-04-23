import * as dotenv from 'dotenv';
dotenv.config();

import { apiQuery } from "dato-nextjs-utils/api";
import { AllProgramsDocument } from "../../graphql";

(async () => {
  const res = await apiQuery(AllProgramsDocument, { variables: { locale: 'en' }, apiToken: process.env.NEXT_PUBLIC_GRAPHQL_API_TOKEN })
  console.log(res.programs)
  console.log(res.programs.length)

})();

