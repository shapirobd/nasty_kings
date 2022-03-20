import React from "react";
import { useStyles } from "./styles/FooterStyles";

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<div className={classes.innerDiv}></div>
		</div>
	);
};

export default Footer;
