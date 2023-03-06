import { useState, useEffect } from 'react';

import List from '../list/List';

import classes from './Main.module.css';

export default function Main({ items, pageTitles, locations }) {
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
	return (
		<section className={classes.teams}>
			<div className={classes.container}>
				<h1>{title}</h1>
				<List items={items} locations={locations} />
			</div>
		</section>
	);
}
