import React from "react";
import { useStyles } from "./styles/ContactPageStyles";

const ContactPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<h1>This is the Contact page</h1>
		</div>
	);
};

export default ContactPage;
