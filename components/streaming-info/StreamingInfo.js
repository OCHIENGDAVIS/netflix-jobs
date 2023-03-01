import classes from './StreamingInfo.module.css';
import Image from 'next/image';

export default function StreamingInfo() {
	return (
		<section className={classes.streaming}>
			<div className={classes.container}>
				<div className={classes.image}>
					<Image
						src="/images/site/reed.jpg"
						alt="Image of a man reading in the netflix office"
						width={800}
						height={390}
						quality={100}
						style={{ objectFit: 'cover', height: '100%' }}
					/>
				</div>
				<div className={classes.info}>
					<h2>
						Streaming entertainment. Global original content.
						Product personalization.
					</h2>
					<p>
						Our first original series debuted in 2013. Over the
						following decades, Streaming TV will replace linear, and
						we hope to keep leading by offering an amazing
						entertainment experience.
					</p>

					<button className={classes.action}>
						<span>See Whats Next</span>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className={classes.icon}
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
			</div>
		</section>
	);
}
