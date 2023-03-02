import Image from 'next/image';

import classes from './BlogItem.module.css';

export default function BlogItem({ blog }) {
	return (
		<div className={classes.item}>
			<span className={classes.tag}>{blog.tag}</span>
			<h3 className={classes.title}>{blog.title}</h3>
			<p className={classes.by}>{blog.by && <span>By {blog.by}</span>}</p>
			{blog.imageUrl && (
				<Image
					alt={blog.title}
					src={blog.imageUrl}
					width={400}
					height={250}
					quality={100}
					style={{ objectFit: 'cover' }}
				/>
			)}

			<button className={classes.action}>
				<span>Read More</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className={classes.icon}
					>
						<path
							fill-rule="evenodd"
							d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			</button>
		</div>
	);
}
