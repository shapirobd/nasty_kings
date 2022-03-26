import React from "react";
import { useStyles } from "./styles/LandingScreenStyles";
import logo from "../../images/logo_vector.png";
import logo_svg_3 from "../../images/logo_svg_3.png";

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
