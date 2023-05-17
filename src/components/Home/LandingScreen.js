import React from "react";
import { useStyles } from "./styles/LandingScreenStyles";
import logo from "../../images/logo_vector.png";
import BandPic from "../../images/NEW/band_pic_main_duotone_nologo.png";

const LandingScreen = () => {
	const classes = useStyles();

	return (
		<div
			className={classes.main}
			// style={{ backgroundImage: `url(${BandPic})` }}
		>
			<div
			className={classes.image}
			style={{ backgroundImage: `url(${BandPic})` }}
			></div>
			{/* <img className={classes.logo} src={logo} alt={logo} /> */}
		</div>
	);
};

export default LandingScreen;
