import { NextRequest, NextResponse } from 'next/server';
import { siteSearch } from '@/lib/search';

export type { SearchResult } from '@/lib/search';

export async function POST(req: NextRequest) {
	try {
		const params = await req.json();
		const results = await siteSearch(params);
		return NextResponse.json(results);
	} catch (err) {
		console.error(err);
		return NextResponse.json(err, { status: 500 });
	}
}
