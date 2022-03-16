import React from "react";
import { useStyles } from "./styles/AboutPageStyles";
import { Box, Grid } from "@mui/material";
import groupPhoto from "../../images/about_us.png";
import { Typography } from "@material-ui/core";

const AboutPage = () => {
	const classes = useStyles();

	return (
		<Box className={classes.main}>
			<Grid container spacing={2} className={classes.container}>
				<Grid item xs={4} className={classes.item}>
					<img src={groupPhoto} className={classes.photo} />
				</Grid>
				<Grid item xs={6} className={classes.item}>
					<div>
						<Typography className={classes.description}>
							This is a description. This is a description. This is a
							description. This is a description. This is a description. This is
							a description. This is a description. This is a description. This
							is a description. This is a description. This is a description.
							This is a description. This is a description. This is a
							description. This is a description. This is a description. This is
							a description. This is a description. This is a description. This
							is a description. This is a description. This is a description.
							This is a description. This is a description. This is a
							description. This is a description. This is a description. This is
							a description. This is a description. This is a description. This
							is a description. This is a description. This is a description.
							This is a description. This is a description. This is a
							description. This is a description.
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AboutPage;
