import { buildClient } from '@datocms/cma-client';

export const client = buildClient({
	apiToken: process.env.DATOCMS_API_TOKEN!,
	environment:
		process.env.DATOCMS_ENVIRONMENT ?? process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT ?? 'main',
});
