import Image from 'next/image';

import Navigation from '../navigation/Navigation';

import classes from './Landing.module.css';

export default function Landing({ images }) {
	const { image1, image2 } = images;
	return (
		<div className={classes.landing}>
			<div className={classes.landing__img1}>
				<Image
					src={image1}
					fill
					alt="image of employees charting in the office"
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className={classes.landing__img2}>
				<Image
					src={image2}
					fill
					alt="image of netflix films"
					style={{ objectFit: 'cover' }}
				/>
			</div>
		</div>
	);
}
