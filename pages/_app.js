import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import Hero from '@/components/hero/Hero';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<title>Netflix Jobs Website Clone</title>
				<meta name="description" content="netflix jobs website" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
			</Head>

			<Component {...pageProps} />
		</Fragment>
	);
}
