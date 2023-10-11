import React from "react";
import { useStyles } from "./styles/AwardsStyles";
// import logo from "../../images/logo_vector.png";
import triangle_blues_society from "../../images/triangle_blues_society.png";
import { Typography } from "@mui/material";

const Awards = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<img src={triangle_blues_society} />
			<Typography
				variant="h4"
				sx={{ color: "#fff", width: "75%", marginTop: "20px" }}
				gutterBottom
			>
				2023 Triangle Blues Society Blues Challenge Winners
			</Typography>
		</div>
	);
};

export default Awards;
