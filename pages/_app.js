import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import Hero from '@/components/hero/Hero';
import Footer from '@/components/footer/Footer';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
