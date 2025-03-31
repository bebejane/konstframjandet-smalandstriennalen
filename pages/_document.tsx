import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		const { year }: { year: YearExtendedRecord } =
			this.props?.__NEXT_DATA__?.props?.pageProps || {};

		return (
			<Html>
				<Head />
				<body style={{ backgroundColor: year?.isArchive ? 'var(--archive)' : 'var(--white)' }}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
