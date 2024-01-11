import React from "react";
import { useStyles } from "./styles/ContactPageStyles";
import { Typography, Button } from "@mui/material";
import useWindowDimensions from "../../customHooks/getWindowDimensions";

const ContactPage = () => {
	const classes = useStyles();

	const { width } = useWindowDimensions();

	return (
		<div className={classes.main}>
			<h4 style={{ fontSize: "2.125rem", margin: "0" }}>Contact / Booking</h4>
			<div className={classes.email}>
				<p style={{ fontSize: "1rem", margin: "0" }}>
					greylanhallandnastykings@gmail.com
				</p>
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
								"&:active": {
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
