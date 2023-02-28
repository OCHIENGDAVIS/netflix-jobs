import { Fragment } from 'react';

import Image from 'next/image';

import Navigation from '../navigation/Navigation';
import classes from './Hero.module.css';

export default function Hero() {
	return (
		<section className={classes.hero}>
			<Navigation />
			<div className={classes.info}>
				<h1>
					A great workplace combines exceptional colleagues and hard
					problems.
				</h1>
			</div>
			<div className={classes.search}>
				<input
					type="text"
					placeholder="Search Jobs by Keyword"
					className={classes.input}
				/>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={3.0}
						stroke="currentColor"
						className={classes.icon}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</span>
			</div>
		</section>
	);
}
