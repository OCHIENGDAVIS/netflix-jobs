import Link from 'next/link';
import classes from './Footer.module.css';
import Facebook from '../icomoon/facebook-icon/Facebook';
import Twitter from '../icomoon/twitter-icon/Twitter';
import Instagram from '../icomoon/instagram-icon/Instagram';
import Youtube from '../icomoon/youtube-icon/Youtube';
import LinkedIn from '../icomoon/linkedin-icon/LinkedIn';
import Podcast from '../icomoon/podcast-icon/Podcast';

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.logo}>
				<Link href="/">
					<h1>Netflix </h1>
				</Link>
				<Link href="/">
					<span>Jobs</span>
				</Link>
			</div>
			<div className={classes.links}>
				<div className={classes.icons}>
					<span className={classes.text}>
						{' '}
						FOLLOW <strong>@wearnetflix</strong>
					</span>
					<Facebook />
					<Twitter />
					<Instagram />
					<Youtube />
					<LinkedIn />
					<Podcast />
				</div>
				<div className={classes.nav}>
					<Link href="/" className={classes.emphasize}>
						{' '}
						Netflix.com
					</Link>
					<Link href="/">About Us</Link>
					<Link href="/">Privacy</Link>
					<Link href="/">Cookie Preferences</Link>
					<Link href="/">Help center</Link>
				</div>
			</div>
		</footer>
	);
}
