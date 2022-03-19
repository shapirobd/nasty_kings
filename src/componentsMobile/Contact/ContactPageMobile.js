import React from "react";
import { useStyles } from "./styles/ContactPageStyles";

const ContactPageMobile = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<h1>This is the Contact page</h1>
		</div>
	);
};

export default ContactPageMobile;
