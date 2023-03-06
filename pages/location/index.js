import Navigation from '@/components/navigation/Navigation';
import Landing from '@/components/landing/Landing';
import DreamTeam from '@/components/dream-team/DreaTeam';

import { getAllTeams, getPageTitles } from '@/data/teams';
import { getLocationLandingImages } from '@/data/location';

import classes from '@/styles/Location.module.css';

export default function Location({ teams, pageTitles, images }) {
	return (
		<section className={classes.location}>
			<div className={classes.header}>
				<Navigation />
			</div>
			<Landing images={images} />
			<DreamTeam teams={teams} pageTitles={pageTitles} />
		</section>
	);
}

export async function getStaticProps() {
	const teams = getAllTeams();
	const pageTitles = getPageTitles();
	const images = getLocationLandingImages();

	return {
		props: {
			pageTitles,
			teams,
			images,
		},
	};
}
