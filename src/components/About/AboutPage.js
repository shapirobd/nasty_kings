import React from "react";
import { useStyles } from "./styles/AboutPageStyles";
import { Box, Grid } from "@mui/material";
import greysPhoto from "../../images/grey_hall.jpeg";
import { Typography } from "@material-ui/core";

const AboutPage = () => {
	const classes = useStyles();

	return (
		<Box className={classes.main}>
			<Grid container className={classes.greysSection}>
				<Grid item xs={5} className={classes.photoContainer}>
					<img src={greysPhoto} className={classes.photo} />
				</Grid>
				<Grid
					item
					xl={7}
					lg={6}
					md={5}
					className={classes.descriptionContainer}
				>
					<Typography className={classes.description}>
						Greylan started playing guitar at the age of 13 and immediately fell
						in love with blues and rock n’ roll music. As he grew more
						proficient on the guitar, so did his ear for different styles of
						music. By the time he was 18 he was listening and playing styles
						from bluegrass to rock n’ roll. Greylan eventually went on and
						earned his music degree in Jazz Guitar/Performance from North
						Carolina Central University. Greylan formed the Nasty Kings as a
						result of life long friends who all share a passion for music and
						musical exploration.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AboutPage;
