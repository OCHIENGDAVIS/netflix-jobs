import Head from 'next/head';

import Hero from '@/components/hero/Hero';
import Freedom from '@/components/freedom/Freedom';
import StreamingInfo from '@/components/streaming-info/StreamingInfo';
import Latest from '@/components/latest/Latest';

import { getAllVideos } from '@/data/videos';

import styles from '@/styles/Home.module.css';

export default function Home({ videos }) {
	return (
		<div>
			<Head>
				<title>Netflix Jobs | Home </title>
			</Head>
			<Hero />
			<Freedom />
			<StreamingInfo />
			<Latest videos={videos} />
		</div>
	);
}

export async function getStaticProps() {
	const videos = await getAllVideos();
	return {
		props: {
			videos,
		},
	};
}
