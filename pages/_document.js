import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<div id="mobile-root"></div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
