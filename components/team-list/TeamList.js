import classes from './TeamsList.module.css';

import TeamItem from '../team-item/TeamItem';

export default function TeamList({ teams }) {
	return (
		<div className={classes.cards}>
			{teams &&
				teams.map((team) => <TeamItem team={team} key={team.icon} />)}
		</div>
	);
}
