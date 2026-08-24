export const dynamic = 'force-dynamic';
import config from '@/datocms.config';
import router from 'next-dato-utils/router';
export const GET = async (req: Request, params: any) => router(req, params, config);
export const POST = async (req: Request, params: any) => router(req, params, config);
