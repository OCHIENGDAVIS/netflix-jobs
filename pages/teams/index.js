import { Fragment } from 'react';

import Navigation from '@/components/navigation/Navigation';
import Landing from '@/components/landing/Landing';
import Main from '@/components/main/Main';
import {
	getAllTeams,
	getPageTitles,
	getTeamsLandingImages,
} from '@/data/teams';

import classes from '@/styles/Teams.module.css';

export default function Teams({ teams, pageTitles, teamsLandingImages }) {
	return (
		<section className={classes.teams}>
			<div className={classes.header}>
				<Navigation />
			</div>
			<Landing images={teamsLandingImages} />
			<Main items={teams} pageTitles={pageTitles} />
		</section>
	);
}

export async function getStaticProps() {
	const teams = getAllTeams();
	const pageTitles = getPageTitles();
	const teamsLandingImages = getTeamsLandingImages();
	return {
		props: {
			pageTitles,
			teams,
			teamsLandingImages,
		},
	};
}
