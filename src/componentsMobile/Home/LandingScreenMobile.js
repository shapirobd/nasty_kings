import React from "react";
import { useStyles } from "./styles/LandingScreenStyles";
import logo from "../../images/logo_vector.png";
import logo_svg_3 from "../../images/ghnk_logo_new.png";
import { Typography } from "@mui/material"

const LandingScreenMobile = () => {
	const classes = useStyles();

	return (
		<div
			className={classes.main}
			// style={{ backgroundImage: `url(${logo_svg_3})` }}
		>
			<img className={classes.logo} src={logo_svg_3} alt={logo_svg_3} />
		</div>
	);
};

export default LandingScreenMobile;
