import classes from './List.module.css';

import ListItem from '../list-item/ListItem';

export default function List({ items }) {
	return (
		<div className={classes.cards}>
			{items &&
				items.map((item) => <ListItem item={item} key={item.icon} />)}
		</div>
	);
}
