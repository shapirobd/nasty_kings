import React from "react";
import { useStyles } from "./styles/BlockQuoteStyles";
// import logo from "../../images/logo_vector.png";
import logo_svg_3 from "../../images/ghnk_logo_new.png";
import { Typography } from "@mui/material";

const BlockQuote = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<Typography
				variant="body1"
				sx={{ color: "#fff", width: "50%" }}
				gutterBottom
			>
				“Greylan Hall & The Nasty Kings have deep roots in blues and rock music,
				though it’s not uncommon to hear them dip their notes in colors of
				country, jazz, funk and fusion. Based in Durham NC, the passionate
				quartet features Greylan on majestic guitars, Jacob Seyle on heated
				Hammond B-3 organ, Matt Grady supplying the low end and Ethan Prindle
				delivering thundering drums.”
			</Typography>
			<Typography
				variant="body1"
				sx={{ color: "#fff", width: "90%" }}
				gutterBottom
			>
				- Shakori Hills Music Festival
			</Typography>
		</div>
	);
};

export default BlockQuote;
