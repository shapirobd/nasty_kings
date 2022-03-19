import React from "react";
import { useStyles } from "./styles/AboutPageStyles";
import { Box, Grid } from "@mui/material";
import greysPhoto from "../../images/grey_hall.jpeg";
import { Typography } from "@material-ui/core";

const AboutPageMobile = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<div
				style={{
					height: "100%",
					width: "90%",
					position: "absolute",
					padding: "0%",
				}}
			>
				<div className={classes.greysSection}>
					<div className={classes.photoContainer}>
						<img src={greysPhoto} className={classes.photo} />
					</div>
					<div className={classes.descriptionContainer}>
						<Typography className={classes.description}>
							Greylan started playing guitar at the age of 13 and immediately
							fell in love with blues and rock n’ roll music. As he grew more
							proficient on the guitar, so did his ear for different styles of
							music. By the time he was 18 he was listening and playing styles
							from bluegrass to rock n’ roll. Greylan eventually went on and
							earned his music degree in Jazz Guitar/Performance from North
							Carolina Central University. Greylan formed the Nasty Kings as a
							result of life long friends who all share a passion for music and
							musical exploration.
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPageMobile;
