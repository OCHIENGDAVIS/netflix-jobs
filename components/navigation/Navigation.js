import { useState } from 'react';
import Link from 'next/link';

import classes from './Navigation.module.css';

export default function Navigation() {
	return (
		<header id="header" className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">
					<h1>Netflix </h1>
				</Link>
				<Link href="/">
					<span>Jobs</span>
				</Link>
			</div>
			<nav className={classes.nav}>
				<ul className={classes.items}>
					<li>
						<Link href="/teams">Teams</Link>
					</li>
					<li>
						<Link href="/location">Location</Link>
					</li>
					<li className={classes.dropdown}>
						<button href={`#`} className={classes.drop__container}>
							<span>Emerging Talent</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="3.5"
								stroke="currentColor"
								className=""
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</button>
						<div className={classes.options}>
							<Link href={`#`}>New Grads</Link>
							<Link href={`#`}>Interns</Link>
						</div>
					</li>
					<li className={classes.dropdown}>
						<button className={classes.drop__container}>
							<Link href={`#`}>Wearnetflix</Link>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="3.5"
								stroke="currentColor"
								className=""
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</button>
						<div className={classes.options}>
							<Link href={`#`}>NETFLIX CULTURE MEMO</Link>
							<Link href={`#`}>WORK LIFE PHILOSOPHY</Link>
							<Link href={`#`}>INCLUSION & DIVERSITY</Link>
							<Link href={`#`}>VIDEO</Link>
							<Link href={`#`}>PODCAST</Link>
							<Link href={`#`}>BLOG</Link>
						</div>
					</li>
				</ul>
				<div className={classes.search}>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={3.5}
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
					<span>Search Jobs</span>
				</div>
			</nav>
		</header>
	);
}
