import Link from 'next/link';

import Facebook from '../icomoon/facebook-icon/Facebook';
import Instagram from '../icomoon/instagram-icon/Instagram';
import Twitter from '../icomoon/twitter-icon/Twitter';
import Youtube from '../icomoon/youtube-icon/Youtube';

import classes from './MobileNav.module.css';

export default function MobileNav({ handleClose }) {
	return (
		<div className={classes.mobile}>
			<div className={classes.logo}>
				<div>
					<h1>Netflix </h1>
					<span>Jobs </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
					onClick={handleClose}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<Link href="/teams">Teams</Link>
					</li>
					<li>
						<Link href="/location">Locations</Link>
					</li>
					<li>
						<span className={classes.dropdown}>
							Emerging talent{' '}
						</span>
						<ul>
							<li>
								<Link href={'#'}>New Grads </Link>
							</li>
							<li>
								<Link href={'#'}>Interns </Link>
							</li>
						</ul>
					</li>
					<li>
						<span className={classes.dropdown}>
							Emerging talent{' '}
						</span>
						<ul>
							<li>
								<Link href={'#'}>Wearnetflix</Link>
							</li>
							<li>
								<Link href={'#'}>Netflix culture memo</Link>
							</li>
							<li>
								<Link href={'#'}>
									Work life philosophy culture memo
								</Link>
							</li>
							<li>
								<Link href={'#'}>Inclusion & Diversity </Link>
							</li>
							<li>
								<Link href={'#'}>Video</Link>
							</li>
							<li>
								<Link href={'#'}>Podcast</Link>
							</li>
							<li>
								<Link href={'#'}>Blog</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div className={classes.icons}>
				<Facebook />
				<Twitter />
				<Instagram />
				<Youtube />
			</div>
		</div>
	);
}
