import { Fragment } from 'react';

import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import Freedom from '../freedom/Freedom';
import Navigation from '../navigation/Navigation';

import classes from './Layout.module.css';

export default function Layout(props) {
	return (
		<Fragment>
			<Hero />

			<main>{props.children}</main>
			<Footer />
		</Fragment>
	);
}
