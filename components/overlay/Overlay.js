import { useEffect, useState } from 'react';

import classes from './Overlay.module.css';

export default function Overlay(props) {
	useEffect(() => {
		const body = document.querySelector('body');
		body.classList.add('overlay');
	});

	function handleClose() {
		const body = document.querySelector('body');
		body.classList.remove('overlay');
		props.handleClose();
	}

	return <div className={classes.overlay} onClick={handleClose}></div>;
}
