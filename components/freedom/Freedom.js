import Image from 'next/image';

import classes from './Freedom.module.css';

export default function Freedom() {
	return (
		<section className={classes.freedom}>
			<div className={`${classes.info} shadow`}>
				<h2 className={classes.title}>Freedom and Responsibility</h2>
				<p className={classes.text}>
					Our core philosophy is people over process. Our culture has
					been instrumental to our success and has helped us attract
					and retain stunning colleagues, making work here more
					satisfying.
				</p>
				<button className={classes.btn}>
					<span>READ ABOUT OUR CULTURE</span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.0"
							stroke="currentColor"
							class={classes.icon}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</span>
				</button>
			</div>
			<div className={`${classes.info} shadow`}>
				<Image
					src="/images/site/freedom.jpg"
					alt="image of three people enjoying work flexibility"
					height={339}
					width={480}
				/>
			</div>
		</section>
	);
}
