import Link from 'next/link';
import Image from 'next/image';

import classes from './TeamItem.module.css';

export default function TeamItem({ team }) {
	return (
		<div className={classes.card}>
			<div>
				<Image
					src={team.icon}
					alt={team.title}
					width={100}
					height={100}
				/>
			</div>
			<h2>{team.title}</h2>
			<ul className={classes.list}>
				{team.subteams.map((subteam, index) => {
					return (
						<li key={index}>
							<Link href={''}>{subteam}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
