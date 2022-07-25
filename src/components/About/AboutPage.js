import React from "react";
import { useStyles } from "./styles/AboutPageStyles";
import { Box, Grid } from "@mui/material";
import greysPhoto from "../../images/grey_hall.jpeg";
import jacobsPhoto from "../../images/jacob_seyle.jpeg";
import { Typography } from "@material-ui/core";

const AboutPage = () => {
	const classes = useStyles();

	return (
		<Box className={classes.main}>
			<div
				style={{
					// height: "100%",
					width: "90%",
					// position: "absolute",
					padding: "0 5%",
				}}
			>
				<Grid container className={classes.greysSection}>
					<Grid item xs={12} lg={5} className={classes.photoContainer}>
						<img src={greysPhoto} className={classes.photo} />
					</Grid>
					<Grid
						item
						xl={6}
						lg={5}
						xs={12}
						className={classes.descriptionContainer}
					>
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
					</Grid>
				</Grid>
				<Grid container className={classes.jacobsSection}>
					<Grid
						item
						xl={6}
						lg={5}
						xs={12}
						className={classes.jacobsDescriptionContainer}
					>
						<Typography className={classes.description}>
							Jacob Seyle has been speaking the language of groove since he
							first laid hands on a Hammond B-3 at the tender age of 14. Soon
							after, he was teaching himself harmonica to old rock and blues
							records. His sound is derived from soul, funk, rock, and blues
							from years past. Cutting his teeth with some of the best, Jacob
							has shared the stage with Marcus King, Jeff Sipe, Justin Stanton,
							Ike Stubblefield, Yonrico Scott, Cedric Burnside, and more.
						</Typography>
					</Grid>
					<Grid item xs={12} lg={5} className={classes.jacobPhotoContainer}>
						<img
							src={jacobsPhoto}
							className={classes.photo}
							style={{ objectFit: "cover", width: "100%" }}
						/>
					</Grid>
				</Grid>
				<Grid container className={classes.greysSection}>
					<Grid item xs={12} lg={5} className={classes.photoContainer}>
						{/* <img src={greysPhoto} className={classes.photo} /> */}
					</Grid>
					<Grid
						item
						xl={6}
						lg={5}
						xs={12}
						className={classes.descriptionContainer}
					>
						<Typography className={classes.description}>
							Ethan Prindle (Little Onion Boy) has been playing the drums since
							the age of 13, inspired by drummers such as John Bonham, Mitch
							Mitchell, and Phil Selway. He would go on to learn and appreciate
							various genres of music in addition to rock, such as funk, blues,
							jazz, and hip-hop. Ethan studied Jazz Performance for a few
							semesters at North Carolina Central University, ultimately
							receiving a degree in Music Education. When he isn’t holding down
							the drumset, Ethan can be found raising the next generation of
							musicians in the elementary school classroom. Little Onion Boy
							loves YOU!
						</Typography>
					</Grid>
				</Grid>
			</div>
		</Box>
	);
};

export default AboutPage;
