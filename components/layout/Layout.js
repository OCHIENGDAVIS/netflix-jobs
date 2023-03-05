import { Fragment } from 'react';

import Footer from '../footer/Footer';

export default function Layout(props) {
	return (
		<Fragment>
			<div id="intersectionTarget"></div>
			<main>{props.children}</main>
			<Footer />
		</Fragment>
	);
}
