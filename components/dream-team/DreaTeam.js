import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import TeamList from '../team-list/TeamList';

import classes from './DreamTeam.module.css';

export default function DreamTeam({ teams, pageTitles }) {
	const [title, setTitle] = useState();
	const [pathname, setPath] = useState();
	useEffect(() => {
		if (window !== 'undefined') {
			setPath(window.location.pathname);
			switch (pathname) {
				case '/teams':
					setTitle(pageTitles[pathname.replace('/', '')]);
					break;
				case '/location':
					setTitle(pageTitles[pathname.replace('/', '')]);
					break;
				default:
					break;
			}
		}
	}, [title, pathname]);
	console.log(pathname);
	console.log(title);

	return (
		<section className={classes.teams}>
			<div className={classes.container}>
				<h1>{title}</h1>
				<TeamList teams={teams} />
			</div>
		</section>
	);
}
