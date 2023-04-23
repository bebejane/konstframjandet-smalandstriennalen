import { GraphQLClient, gql } from "graphql-request";
import i18nPaths from "./lib/i18n/paths.json" assert { type: "json" };

export const locales = ["sv", "en"];
export const defaultLocale = "sv";

const sassOptions = {
	includePaths: ["./components", "./pages"],
	prependData: `
    @use "sass:math";
    @import "./lib/styles/mediaqueries"; 
    @import "./lib/styles/fonts";
  `,
};

async function allYears() {
	const graphQLClient = new GraphQLClient("https://graphql.datocms.com", {
		headers: {
			Authorization: process.env.GRAPHQL_API_TOKEN,
			"X-Exclude-Invalid": true,
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
			destination: `/en/${i18nPaths[k].sv}/:path*`,
			source: `/en/${i18nPaths[k].en}/:path*`,
			locale: false,
		})
	);

	years.forEach(({ title }) =>
		Object.keys(i18nPaths).forEach((k) =>
			rewrites.push({
				destination: `/en/${title}/${i18nPaths[k].sv}/:path*`,
				source: `/en/${title}/${i18nPaths[k].en}/:path*`,
				locale: false,
			})
		)
	);
	return rewrites;
};

export default async (phase, { defaultConfig }) => {
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
			return await i18Rewrites();
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
				loader: "graphql-tag/loader",
			});
			config.module.rules.push({
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: ["@svgr/webpack"],
			});
			return config;
		},
	};
	return nextConfig;
};
