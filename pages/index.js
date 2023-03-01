import Head from 'next/head';

import Hero from '@/components/hero/Hero';
import Freedom from '@/components/freedom/Freedom';

import styles from '@/styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Netflix Jobs | Home </title>
			</Head>
			<Hero />
			<Freedom />
		</div>
	);
}
