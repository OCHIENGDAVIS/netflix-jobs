import { Fragment } from 'react';

import Navigation from '@/components/navigation/Navigation';
import Landing from '@/components/landing/Landing';
import DreamTeam from '@/components/dream-team/DreaTeam';
import { getAllTeams } from '@/data/teams';

import classes from '@/styles/Teams.module.css';

export default function Teams({ teams }) {
	return (
		<section className={classes.teams}>
			<div className={classes.header}>
				<Navigation />
			</div>
			<Landing />
			<DreamTeam teams={teams} />
		</section>
	);
}

export async function getStaticProps() {
	const teams = getAllTeams();
	return {
		props: {
			teams,
		},
	};
}
