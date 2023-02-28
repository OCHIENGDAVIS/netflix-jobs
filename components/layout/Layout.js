import { Fragment } from 'react';

import Hero from '../hero/Hero';
import Footer from '../footer/Footer';

import classes from './Layout.module.css';

export default function Layout(props) {
	return (
		<Fragment>
			<main>
				<Hero />
				<div className={classes.container}> {props.children}</div>
			</main>
			<Footer />
		</Fragment>
	);
}
