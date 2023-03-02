import BlogList from '../blog-list/BlogList';

import classes from './Blog.module.css';
export default function Blog({ blogs }) {
	return (
		<section className={classes.blog}>
			<BlogList blogs={blogs} />
		</section>
	);
}
