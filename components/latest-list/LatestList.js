import LatestItem from '../latest-item/LatestItem';
import classes from './LatestList.module.css';

export default function LatestList({ videos }) {
	return (
		<div className={classes.list}>
			{videos.map((video) => {
				return <LatestItem key={video.videoUrl} video={video} />;
			})}
		</div>
	);
}
