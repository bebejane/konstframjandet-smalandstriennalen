import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: ['./components', './app'],
		prependData: `
			@use "sass:math";			
    	@use "@/styles/mediaqueries" as *;
  	`,
	},
	typedRoutes: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	webpack: (config) => {
		config.module.exprContextCritical = false;
		config.resolve.alias['datocms.config'] = path.join(__dirname, 'datocms.config.ts');
		return config;
	},
	turbopack: {
		resolveAlias: {
			'datocms.config': './datocms.config.ts',
		},
		rules: {
			'*.svg': {
				loaders: ['turbopack-inline-svg-loader'],
				condition: {
					content: /^[\s\S]{0,4000}$/, // <-- Inline SVGs smaller than ~4Kb (since Next.js v16)
				},
				as: '*.js',
			},
		},
	},
	devIndicators: false,
	logging: false,
	experimental: {
		//prefetchInlining: true,
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: `frame-ancestors 'self' https://plugins-cdn.datocms.com/ ${process.env.NEXT_PUBLIC_DATOCMS_BASE_EDITING_URL} ${process.env.NEXT_PUBLIC_SITE_URL}`,
					},
				],
			},
			{
				source: '/api/web-previews',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{ key: 'Access-Control-Allow-Methods', value: 'POST,OPTIONS' },
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
			{
				source: '/api/backup',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{ key: 'Access-Control-Allow-Methods', value: 'POST,OPTIONS' },
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		];
	},
};

export default withNextIntl(nextConfig);
