import Head from 'next/head';

import Hero from '@/components/hero/Hero';
import Freedom from '@/components/freedom/Freedom';
import StreamingInfo from '@/components/streaming-info/StreamingInfo';
import Latest from '@/components/latest/Latest';
import Blog from '@/components/blog/Blog';

import { getAllVideos } from '@/data/videos';
import { getAllBlogs } from '@/data/blog';

import styles from '@/styles/Home.module.css';

export default function Home({ videos, blogs }) {
	return (
		<div>
			<Head>
				<title>Netflix Jobs | Home </title>
			</Head>
			<Hero />
			<Freedom />
			<StreamingInfo />
			<Latest videos={videos} />
			<Blog blogs={blogs} />
		</div>
	);
}

export async function getStaticProps() {
	const videos = await getAllVideos();
	const blogs = await getAllBlogs();
	return {
		props: {
			videos,
			blogs,
		},
	};
}
