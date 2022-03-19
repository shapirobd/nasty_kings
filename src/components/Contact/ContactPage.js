import React from "react";
import { useStyles } from "./styles/ContactPageStyles";
import { Typography, Button } from "@mui/material";

const ContactPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<Typography variant="h3">Contact/Booking</Typography>
			<div className={classes.email}>
				<Typography variant="h5">greylanhallandnastykings@gmail.com</Typography>
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
