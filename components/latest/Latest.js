import LatestList from '../latest-list/LatestList';
import classes from './Latest.module.css';

export default function Latest({ videos }) {
	return (
		<section className={classes.latest}>
			<h3>Latest From Netflix</h3>
			<LatestList videos={videos} />
		</section>
	);
}
