import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		const { year }: { year: YearExtendedRecord } =
			this.props?.__NEXT_DATA__?.props?.pageProps || {};

		const bodyStyle = {}; //{ backgroundColor: year?.isArchive ? 'var(--archive)' : 'var(--white)' };

		return (
			<Html>
				<Head>
					<link rel='stylesheet' href='https://use.typekit.net/oki8iyk.css' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
					<link
						href='https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body style={bodyStyle}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
