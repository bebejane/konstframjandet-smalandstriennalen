import { GraphQLClient, gql } from 'graphql-request';
import i18nPaths from './lib/i18n/paths.json' with { type: "json" };

export const locales = ['sv', 'en'];
export const defaultLocale = 'sv';

const sassOptions = {
	includePaths: ['./components', './pages'],
	prependData: `
    @use "sass:math";
    @import "./styles/mediaqueries"; 
    @import "./styles/fonts";
  `,
};

async function allYears() {
	const graphQLClient = new GraphQLClient('https://graphql.datocms.com', {
		headers: {
			Authorization: process.env.GRAPHQL_API_TOKEN,
			'X-Environment': process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT,
			'X-Exclude-Invalid': true,
		},
	});

	const { years } = await graphQLClient.request(
		gql`
			{
				years: allYears(first: 100) {
					title
				}
			}
		`
	);
	return years;
}

const i18Rewrites = async () => {
	const years = await allYears();
	const rewrites = [];

	Object.keys(i18nPaths).forEach((k) =>
		rewrites.push({
			source: `/en/${i18nPaths[k].en}/:path*`,
			destination: `/en/${i18nPaths[k].sv}/:path*`,
			locale: false,
		})
	);
	console.log(years)
	years.forEach(({ title }) =>
		Object.keys(i18nPaths).forEach((k) =>
			rewrites.push({
				source: `/en/${title}/${i18nPaths[k].en}/:path*`,
				destination: `/en/${title}/${i18nPaths[k].sv}/:path*`,
				locale: false,
			})
		)
	);
	return rewrites;
};

export default async (phase, { defaultConfig }) => {
	const rewrites = await i18Rewrites();
	//console.log(rewrites)
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		i18n: {
			locales,
			defaultLocale,
			localeDetection: false,
		},
		async rewrites() {
			return {
				beforeFiles: rewrites,
			};
		},
		sassOptions,
		typescript: {
			ignoreBuildErrors: true,
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
		devIndicators: {
			buildActivity: false,
		},
		experimental: {
			scrollRestoration: true,
		},
		webpack: (config, ctx) => {
			config.module.rules.push({
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: 'graphql-tag/loader',
			});
			config.module.rules.push({
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: ['@svgr/webpack'],
			});
			return config;
		},
	};
	return nextConfig;
};
