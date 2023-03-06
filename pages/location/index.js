import Navigation from '@/components/navigation/Navigation';
import Landing from '@/components/landing/Landing';
import Main from '@/components/main/Main';

import { getAllTeams, getPageTitles } from '@/data/teams';
import { getLocationLandingImages } from '@/data/location';
import { getLocations } from '@/data/location';

import classes from '@/styles/Location.module.css';

export default function Location({ pageTitles, images, locations }) {
	return (
		<section className={classes.location}>
			<div className={classes.header}>
				<Navigation />
			</div>
			<Landing images={images} />
			<Main items={locations} pageTitles={pageTitles} />
		</section>
	);
}

export async function getStaticProps() {
	const pageTitles = getPageTitles();
	const images = getLocationLandingImages();
	const locations = getLocations();

	return {
		props: {
			pageTitles,
			images,
			locations,
		},
	};
}
