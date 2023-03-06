import Link from 'next/link';
import Image from 'next/image';

import classes from './ListItem.module.css';

export default function TeamItem({ item }) {
	return (
		<div className={classes.card}>
			<div>
				<Image
					src={item.icon}
					alt={item.title}
					width={100}
					height={100}
				/>
			</div>
			<h2>{item.title}</h2>
			<ul className={classes.list}>
				{item.subItems.map((subteam, index) => {
					return (
						<li key={index}>
							<Link href={''}>{subteam}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
