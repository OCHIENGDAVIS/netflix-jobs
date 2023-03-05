import Link from 'next/link';
import Image from 'next/image';

import TeamList from '../team-list/TeamList';

import classes from './DreamTeam.module.css';

export default function DreamTeam({ teams }) {
	return (
		<section className={classes.teams}>
			<div className={classes.container}>
				<h1>Join Your Dream Team</h1>
				<TeamList teams={teams} />
			</div>
		</section>
	);
}
