import React from "react";
import { Typography, Grid } from "@material-ui/core";
import logo_bw from "../../images/logo_bw.png";
import { useStyles } from "./styles/SinglesStyles";
import Single from "./Single";

const Singles = ({ singleList, fromHome }) => {
	const classes = useStyles();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h2"
				className={classes.singlesHeader}
				// sx={{ fontWeight: "bold" }}
			>
				Latest Singles
			</Typography>
			<Grid container spacing={5} className={classes.albumsContainer}>
				{singleList.map((s) => (
					<Single
						key={s.name}
						coverArt={s.coverArt}
						name={s.name}
						url={s.url}
						fromHome={fromHome}
						albumCode={s.albumCode}
					/>
				))}
			</Grid>
		</div>
	);
};

export default Singles;
