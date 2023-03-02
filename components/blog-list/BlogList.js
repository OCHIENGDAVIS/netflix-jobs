import BlogItem from '../blog-item/BlogItem';

import classes from './BlogList.module.css';

export default function BlogList({ blogs }) {
	return (
		<div className={classes.list}>
			{blogs &&
				blogs.map((blog) => <BlogItem key={blog.title} blog={blog} />)}
		</div>
	);
}
