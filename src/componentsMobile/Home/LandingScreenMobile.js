import React from "react";
import { useStyles } from "./styles/LandingScreenStyles";
import logo from "../../images/logo_vector.png";
import BandPic from "../../images/BandPic_4.png";

const LandingScreenMobile = () => {
	const classes = useStyles();

	return (
		<div
			className={classes.main}
			style={{ backgroundImage: `url(${BandPic})` }}
		>
			{/* <img className={classes.logo} src={logo} alt={logo} /> */}
		</div>
	);
};

export default LandingScreenMobile;
