import React from "react";
import { useStyles } from "./styles/AwardsStyles";
// import logo from "../../images/logo_vector.png";
import triangle_blues_society from "../../images/triangle_blues_society_mobile.png";
import { Typography } from "@mui/material"

const AwardsMobile = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<img src={triangle_blues_society} />
			<Typography
				variant="h6"
				sx={{ color: "#fff", width: "90%", marginBottom: "0px", marginTop: "15px" }}
				gutterBottom
			>
				2023 Triangle Blues Society
			</Typography>
			<Typography
				variant="h6"
				sx={{ color: "#fff", width: "90%" }}
				gutterBottom
			>
				Blues Challenge Winners
			</Typography>
		</div>
	);
}

export default AwardsMobile;