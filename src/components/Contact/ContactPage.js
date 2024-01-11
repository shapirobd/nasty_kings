import React from "react";
import { useStyles } from "./styles/ContactPageStyles";
import { Typography, Button } from "@mui/material";

const ContactPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<h3 style={{ fontSize: "3rem", margin: "0" }}>Contact / Booking</h3>
			<div className={classes.email}>
				<h5 style={{ fontSize: "1.5rem", margin: "0" }}>
					greylanhallandnastykings@gmail.com
				</h5>
				<div className={classes.linkContainer}>
					<a
						href="mailto:greylanhallandnastykings@gmail.com"
						className={classes.link}
					>
						<Button
							disableRipple
							className={classes.button}
							color="inherit"
							variant="outlined"
							sx={{
								"&:hover": {
									backgroundColor: "#ffa900",
									color: "black",
								},
							}}
						>
							Click here to email
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
