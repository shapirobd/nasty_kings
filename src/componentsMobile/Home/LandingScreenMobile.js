import React from "react";
import { useStyles } from "./styles/LandingScreenStyles";
import logo from "../../images/logo_vector.png";
// import logo_svg_3 from "../../images/ghnk_logo_new.png";
import BandPic from "../../images/NEW/band_pic_main_duotone_nologo.png";
import { Typography } from "@mui/material"

const LandingScreenMobile = () => {
	const classes = useStyles();

	return (
		<div
			className={classes.main}
			style={{ backgroundImage: `url(${BandPic})` }}
		>
			{/* <img className={classes.logo} src={BandPic} alt={BandPic} /> */}
		</div>
	);
};

export default LandingScreenMobile;
