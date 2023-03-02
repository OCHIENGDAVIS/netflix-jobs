import Image from 'next/image';

import classes from './LatestItem.module.css';

export default function LatestItem({ video }) {
	const divStyle = {
		backgroundImage: `url(${video.thumbnailUrl})`,
	};
	return (
		<div className={`${classes.item} shadow`} style={divStyle}>
			<Image
				src={video.thumbnailUrl}
				alt={video.title}
				fill
				style={{
					objectFit: 'cover',
					height: '100%',
					zIndex: '-1',
				}}
			/>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className={classes.icon}
				>
					<path
						fill-rule="evenodd"
						d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<p> {video.title}</p>
		</div>
	);
}
